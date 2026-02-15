import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PageTitle from '../components/PageTitle';
import FadeInUp from '../components/FadeInUp';
import { getUserProfile, updateUserProfile } from '../services/profileService';

function Profile() {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const [dbUser, setDbUser] = useState<any>(null);
    const [bio, setBio] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isLoadingProfile, setIsLoadingProfile] = useState(true);
    const [saveMessage, setSaveMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh] text-white">
                Loading...
            </div>
        );
    }

    // Load user profile from database
    useEffect(() => {
        const loadProfile = async () => {
            if (!isAuthenticated || !user || !user.sub) return;

            try {
                setIsLoadingProfile(true);
                setSaveMessage(null); // Clear any previous errors
                const accessToken = await getAccessTokenSilently().catch(() => undefined);
                const result = await getUserProfile(user.sub, accessToken);

                if (result.success && result.user) {
                    setDbUser(result.user);
                    setBio(result.user.bio || '');
                } else {
                    // User doesn't exist in DB yet - that's okay, they'll be created on sync
                    setBio('');
                }
            } catch (error: any) {
                console.error('Failed to load profile:', error);
                // Don't show error if it's just that user doesn't exist yet
                if (error.message?.includes('404') || error.message?.includes('not found')) {
                    // User not in database yet - will be created by useUserSync
                    setBio('');
                } else {
                    setSaveMessage({ type: 'error', text: 'Failed to load profile. Please refresh the page.' });
                }
            } finally {
                setIsLoadingProfile(false);
            }
        };

        loadProfile();
    }, [isAuthenticated, user, getAccessTokenSilently]);

    const handleSave = async () => {
        if (!user || !user.sub) return;

        try {
            setIsSaving(true);
            setSaveMessage(null);
            const accessToken = await getAccessTokenSilently().catch(() => undefined);
            const result = await updateUserProfile(user.sub, bio, accessToken);
            setDbUser(result.user);
            setIsEditing(false);
            setSaveMessage({ type: 'success', text: 'Profile saved successfully!' });

            // Clear message after 3 seconds
            setTimeout(() => setSaveMessage(null), 3000);
        } catch (error) {
            console.error('Failed to save profile:', error);
            setSaveMessage({ type: 'error', text: 'Failed to save profile. Please try again.' });
        } finally {
            setIsSaving(false);
        }
    };

    if (!isAuthenticated || !user) {
        return null;
    }

    if (isLoadingProfile) {
        return (
            <div className="flex justify-center items-center min-h-[50vh] text-white">
                Loading profile...
            </div>
        );
    }

    return (
        <section className="service-section fix section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <PageTitle title="User Profile" animate={true} />
                            <FadeInUp as="h2" delay={100}>
                                Welcome back, {user.name || user.email}!
                            </FadeInUp>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <FadeInUp delay={200}>
                            <div className="bg-white/5 rounded-xl p-8 mt-8">
                                <div className="flex flex-col items-center gap-6">
                                    {user.picture && (
                                        <img
                                            src={user.picture}
                                            alt={user.name || 'User'}
                                            className="w-[120px] h-[120px] rounded-full border-4 border-white/20"
                                        />
                                    )}

                                    <div className="text-center text-white">
                                        <h3 className="mb-2 text-white">
                                            {user.name || 'User'}
                                        </h3>
                                        {user.email && (
                                            <p className="text-white/70 mb-4">
                                                {user.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="w-full p-6 bg-black/30 rounded-lg">
                                        <h4 className="text-white mb-4 text-lg">
                                            User Information
                                        </h4>
                                        <pre className="text-white/80 text-sm overflow-auto m-0">
                                            {JSON.stringify(user, null, 2)}
                                        </pre>
                                    </div>

                                    {/* Test Field: Bio */}
                                    <div className="w-full p-6 bg-black/30 rounded-lg mt-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="text-white text-lg">
                                                Bio (Test Field)
                                            </h4>
                                            {!isEditing ? (
                                                <button
                                                    onClick={() => setIsEditing(true)}
                                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                                >
                                                    Edit
                                                </button>
                                            ) : (
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={handleSave}
                                                        disabled={isSaving}
                                                        className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                                                    >
                                                        {isSaving ? 'Saving...' : 'Save'}
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setIsEditing(false);
                                                            setBio(dbUser?.bio || '');
                                                            setSaveMessage(null);
                                                        }}
                                                        disabled={isSaving}
                                                        className="px-4 py-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {saveMessage && (
                                            <div className={`mb-4 p-3 rounded-lg ${saveMessage.type === 'success'
                                                ? 'bg-green-900/50 text-green-200'
                                                : 'bg-red-900/50 text-red-200'
                                                }`}>
                                                {saveMessage.text}
                                            </div>
                                        )}

                                        {isEditing ? (
                                            <textarea
                                                value={bio}
                                                onChange={(e) => setBio(e.target.value)}
                                                placeholder="Enter your bio..."
                                                className="w-full p-3 bg-black/50 text-white rounded-lg border border-white/20 focus:border-blue-500 focus:outline-none resize-none"
                                                rows={4}
                                            />
                                        ) : (
                                            <p className="text-white/70 whitespace-pre-wrap">
                                                {dbUser?.bio || 'No bio set. Click Edit to add one.'}
                                            </p>
                                        )}

                                        {dbUser && (
                                            <div className="mt-4 pt-4 border-t border-white/10">
                                                <p className="text-white/50 text-sm">
                                                    Last updated: {new Date(dbUser.updated_at).toLocaleString()}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="w-full p-6 bg-black/30 rounded-lg mt-4">
                                        <h4 className="text-white mb-4 text-lg">
                                            Coming Soon
                                        </h4>
                                        <p className="text-white/70">
                                            Wallet connection and other features will be available here
                                            soon.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
