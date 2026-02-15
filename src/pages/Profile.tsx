import { useAuth0 } from '@auth0/auth0-react';
import PageTitle from '../components/PageTitle';
import FadeInUp from '../components/FadeInUp';

function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh] text-white">
                Loading...
            </div>
        );
    }

    if (!isAuthenticated || !user) {
        return null;
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
