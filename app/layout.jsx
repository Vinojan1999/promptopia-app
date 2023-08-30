import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export const metadata = {
    title: 'Promtopia',
    description: 'Discover and Share AI prompts'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    )
}