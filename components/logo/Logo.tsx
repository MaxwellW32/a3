import { globalFormData } from '@/globalFormData'
import Image from 'next/image'
import React from 'react'

export default function Logo() {

    return (
        <Image alt='logo' src={globalFormData.linkedData.siteInfo.logo} height={140} width={140} style={{ objectFit: "contain" }} />
    )
}
