import { Input } from "postcss";

export default function Page()
{
    return(
        <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <div>
                <h1 className="text-2xl font-bold text-center mb-6">
                    Contact us!
                </h1>
            </div>
            <form className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input 
                        id="email" 
                        type="email"
                        name="email"
                        required
                        className="focus:ring-2 "
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea 
                        id="message" 
                        required 
                        name="message" 
                        rows="4">

                    </textarea>
                </div>
                <button type="submit">
                    Send Message
                </button>
            </form>            
        </main>
    )
}