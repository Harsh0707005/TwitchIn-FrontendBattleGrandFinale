import React from 'react'
import "./style.css"

const Feed = () => {
    return (
        <div id='feedDiv' className='text-white flex flex-col gap-[40px] w-full items-center'>
            <div className='flex flex-col gap-[10px] w-[60%] max-md:w-[100%]'>
                <div className='flex flex-row items-start gap-[10px]'>
                    <img src="https://media.licdn.com/dms/image/C4D03AQGGB6CT6NqFzQ/profile-displayphoto-shrink_100_100/0/1618725077549?e=1721865600&v=beta&t=fu-dfCerMLD9tzdplZjKJDXJzOUeBXke1lMbbTaEmUs" className='rounded-full w-[40px] h-[40px]' />
                    <div className='flex flex-col text-[13px]'>
                        <span><a href="https://www.linkedin.com/in/sandeep-jain-" target='_blank'>Sandeep Jain</a></span>
                        <span className='text-gray-400'>Founder & CEO at GeeksforGeeks</span>
                        <span className='text-gray-400'>2h</span>
                    </div>
                </div>
                <span>Absolutely..!</span>
                <img src="/1.jpeg" className='w-full h-full' />
            </div>
            <div className='flex flex-col gap-[10px] w-[60%] max-md:w-[100%]'>
                <div className='flex flex-row items-start gap-[10px]'>
                    <img src="https://media.licdn.com/dms/image/C4E0BAQG0lRhNgYJCXw/company-logo_100_100/0/1678382029963/openai_logo?e=1724284800&v=beta&t=fE1tz0rUEBg2nfYZaM4zyRjhA2xXniWrGdW3T8AYV6E" className='rounded-full w-[40px] h-[40px]' />
                    <div className='flex flex-col text-[13px]'>
                        <span><a href="https://www.linkedin.com/company/openai/" target='_blank'>OpenAI</a></span>
                        <span className='text-gray-400'>5,198,554 followers</span>
                        <span className='text-gray-400'>1h</span>
                    </div>
                </div>
                <span>GPT-4o, the AI Model That Understands It All</span>
                <video src="/vid.mp4" controls autoPlay></video>
            </div>
            <div className='bg-gray-400 h-[1px] w-[60%]'></div>
            <div className='bg-gray-400 h-[1px] w-[60%]'></div>
            <div className='flex flex-col gap-[10px] w-[60%] max-md:w-[100%]'>
                <div className='flex flex-row items-start gap-[10px]'>
                    <img src="https://media.licdn.com/dms/image/C4D03AQGFTnOaQa4fUQ/profile-displayphoto-shrink_400_400/0/1623400654607?e=1721865600&v=beta&t=1iXQDJkTYsDC4bpdibaa5nzDBKyqwshHV87ba2rk3QQ" className='rounded-full w-[40px] h-[40px]' />
                    <div className='flex flex-col text-[13px]'>
                        <span><a href="https://www.linkedin.com/in/rajstriver/" target='_blank'>Raj Vikramaditya</a></span>
                        <span className='text-gray-400'>SWE-III @ Google | takeUforward | YouTuber(500K+) | Ex-Media.net, Amazon | JGEC</span>
                        <span className='text-gray-400'>5h</span>
                    </div>
                </div>
                <span>After a lot of user feedback and business reasons, we have decided to drop codestudio links from takeUforward dsa sheets. </span>
                <img src="/2.jpeg" className='w-full h-full' />
            </div>
            <div className='bg-gray-400 h-[1px] w-[60%]'></div>
            <div className='flex flex-col gap-[10px] w-[60%] max-md:w-[100%]'>
                <div className='flex flex-row items-start gap-[10px]'>
                    <img src="https://media.licdn.com/dms/image/C4D0BAQHa212XwpTpRw/company-logo_100_100/0/1660626687953/geeksforgeeks_logo?e=1724284800&v=beta&t=jPxEeLVXQlqXfrgexoejEd659lrQj4FmufakpNr_OjI" className='rounded-full w-[40px] h-[40px]' />
                    <div className='flex flex-col text-[13px]'>
                        <span><a href="https://www.linkedin.com/company/geeksforgeeks/" target='_blank'>GeeksforGeeks</a></span>
                        <span className='text-gray-400'>1,898,264 followers</span>
                        <span className='text-gray-400'>5h</span>
                    </div>
                </div>
                <span>Friendly reminder that you’re ✨ 🥹</span>
                <img src="/4.jpeg" className='w-full h-full' />
            </div>
            <div className='bg-gray-400 h-[1px] w-[60%]'></div>
            <div className='flex flex-col gap-[10px] w-[60%] max-md:w-[100%]'>
                <div className='flex flex-row items-start gap-[10px]'>
                    <img src="https://media.licdn.com/dms/image/D5603AQHJWrpUNN10lQ/profile-displayphoto-shrink_100_100/0/1703997453241?e=1721865600&v=beta&t=5gY_pM1dGEZLQ3_UQgIysP3YpxgOSYUePAy3gH_8Q1w" className='rounded-full w-[40px] h-[40px]' />
                    <div className='flex flex-col text-[13px]'>
                        <span><a href="https://www.linkedin.com/in/rishav-chatterjee-fsd/" target='_blank'>Rishav Chatterjee</a></span>
                        <span className='text-gray-400'>Top Programming && Web Dev Voice 🏅| 3M+ Views 🚀</span>
                        <span className='text-gray-400'>4h</span>
                    </div>
                </div>
                <span>Greedy for #Greedy playlist from #strivera2zdsa playlist! 🤩<br></br>

                    Can’t be a better start to the day! 😍 All thanks to raj vikramaditya</span>
                <img src="/3.jpeg" className='w-full h-full' />
            </div>
            <div className='bg-gray-400 h-[1px] w-[60%]'></div>
        </div>
    )
}

export default Feed