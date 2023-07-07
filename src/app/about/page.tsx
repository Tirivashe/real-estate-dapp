import { Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <div>
      <Button component={Link} href="/">Home</Button>
    </div>
  )
}

export default AboutPage