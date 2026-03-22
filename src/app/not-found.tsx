import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center px-6">
                <h1 className="text-8xl font-bold text-tesla-red mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-parasanth-charcoal mb-4">Page Not Found</h2>
                <p className="text-parasanth-grey-dark mb-8 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/" className="btn-primary">
                        Back to Home
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}
