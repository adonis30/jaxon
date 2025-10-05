export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
        <p>&copy; {new Date().getFullYear()} Jaxon Investments Ltd. All rights reserved.</p>
        <p>Plot No. 7701, Lusemfwa Road, Ndola, Zambia | jaxon.inv@gmail.com | +260 77 1433555</p>
        <p className="text-sm text-gray-400 mt-4">
          Developed by <a href="https://www.onixytech.com" target="_blank" className="text-gold hover:underline">Onis Ndhlovu</a>
        </p>
      </div>
    </footer>
  );
}
