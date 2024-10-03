export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black py-10">
            {/* Top section with features, resources, services, help */}
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="font-bold mb-4">Features</h4>
                    <ul className="space-y-2">
                        <li>Aquarium Supplies</li>
                        <li>Certified Captive Grown Corals</li>
                        <li>Collector's Corner®</li>
                        <li>Diver's Den® WYSIWYG Store</li>
                        <li>Gift Certificates</li>
                        <li>Monthly Giveaway Winners</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Resources</h4>
                    <ul className="space-y-2">
                        <li>Acclimation Guide</li>
                        <li>Articles and Information</li>
                        <li>Compatibility Chart</li>
                        <li>Ideal Water Parameters</li>
                        <li>Quarantine Information</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li>Auto Delivery</li>
                        <li>Business Partner Program</li>
                        <li>Email Newsletters</li>
                        <li>PayPal®</li>
                        <li>Rewards Program</li>
                        <li>Video Library</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Help</h4>
                    <ul className="space-y-2">
                        <li>Aquatic Life Guarantee Claim Form</li>
                        <li>Contact Us</li>
                        <li>Diver's Den® Store Help</li>
                        <li>Returns Policy</li>
                        <li>Shipping Information</li>
                        <li>Track Your Order</li>
                        <li>International Shipping Information</li>
                    </ul>
                </div>
            </div>

            {/* Social section */}
            <div className="container mx-auto px-4 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div className="text-lg font-semibold">Join our social networks</div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            <i className="fab fa-youtube"></i> YouTube
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom section with links */}
            <div className="container mx-auto px-4 mt-8">
                <div className="flex justify-center flex-wrap space-x-4 text-sm">
                    <a href="#" className="hover:underline">Freshwater Fish</a>
                    <a href="#" className="hover:underline">Pond</a>
                    <a href="#" className="hover:underline">Food</a>
                    <a href="#" className="hover:underline">Brackish Fish</a>
                    <a href="#" className="hover:underline">Freshwater Inverts</a>
                    <a href="#" className="hover:underline">Freshwater Plants</a>
                    <a href="#" className="hover:underline">Marine Fish</a>
                    <a href="#" className="hover:underline">Corals</a>
                    <a href="#" className="hover:underline">Reef Rock</a>
                    <a href="#" className="hover:underline">Tank Cleaners</a>
                    <a href="#" className="hover:underline">Marine Inverts</a>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="bg-gray-200 py-6 mt-8">
                <div className="container mx-auto px-4 text-center space-y-2">
                    <p className="text-xs">
                        *FREE SHIPPING on qualifying aquatic life orders $229 and up. FREE SHIPPING on qualifying aquarium supplies orders $49 and up. Excludes Frozen Foods.
                    </p>
                    <div className="text-xs space-x-2">
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                    <p className="text-xs">
                        Copyright © 2024, FishStore. All rights reserved. 1234 Fish Avenue, Aquatic City, Oceania
                    </p>
                </div>
            </div>
        </footer>
    );
}