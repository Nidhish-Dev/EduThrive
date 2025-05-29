export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">© 2025 EduThrive. All rights reserved.</p>
        <p className="mt-3 text-gray-100">
          Contact us:{' '}
          <a href="tel:+919301726798" className="hover:text-yellow-400 transition-all duration-200">
            +91 93017 26798
          </a>{' '}
          |{' '}
          <a href="mailto:support@eduthrive.com" className="hover:text-yellow-400 transition-all duration-200">
            eduthrive022@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}