import CommonBanner from '@/Components/Common/Banner/CommonBanner'
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection'
import ScheduleMeetingSection from '@/Components/Common/Meeting/ScheduleMeeting'
import WhyUAESection from '@/Components/WhyUAE/WhyUAESection'
import WhyUAEPoints from '@/Components/WhyUAE/WhyUAEPoints'
import React from 'react'

const page = () => {
    return (
        <div>
            <CommonHerosection
                title="Why UAE"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            />
            <WhyUAESection />
            <CommonBanner
                title="Yorem ipsum dolor sit 
amet, consectetur"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                buttonLink="#"
                buttonText="Cost Calculator "
                imageSrc="/assets/images/common/uae.png"
                imageAlt="Contact Us"
            />
            <WhyUAEPoints />
            <ScheduleMeetingSection />
        </div>
    )
}

export default page