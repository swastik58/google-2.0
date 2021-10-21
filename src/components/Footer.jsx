import React from 'react'

export const Footer = () => {
    return (
        <div className="text-center p-8 mt-8 border-t dark:border-gray-700 border-gray-200">
            <h1>2021 Google 2.0 Inc.</h1> <br/>
            <div className="grid grid-cols-6 gap-0.5 text-center items-center  pt-7 border-t dark:border-gray-700 border-gray-200">
                <a className="ml-2"href="https://github.com/swastik58/google-2.0" target="_blank" rel="noreferrer"><h1>GitHub Source Code</h1></a>
                <a className="ml-2" href="https://www.linkedin.com/in/swastik-s-697214100/" target="_blank" rel="noreferrer"><h1>LinkedIn</h1></a>
                <a className="ml-2" href="mailto:swastiksupakar19@gmail.com" target="_blank" rel="noreferrer"><h1>Gmail</h1></a>
                <a className="ml-2" href="tel:7602508521" target="_blank" rel="noreferrer"><h1>Mobile</h1></a>
                <a className="ml-2" href="https://www.facebook.com/swastik.supakar.58/" target="_blank" rel="noreferrer"><h1>Facebook</h1></a>
                <a className="ml-2" href="https://twitter.com/SwastikSupakar" target="_blank" rel="noreferrer"><h1>Twitter</h1></a>
            </div>
        </div>
    );
}
