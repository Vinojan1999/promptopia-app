import Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';
import '@/styles/globals.css';

export const metadata = {
    title: 'Promtopia',
    description: 'Discover and Share AI prompts'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Navbar />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}