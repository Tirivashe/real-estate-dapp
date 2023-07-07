import { Button } from "@mantine/core"
import Link from "next/link"
import React from "react"
import styles from "./main.module.scss"

export default function Home() {
  return (
    <main>
      <Button className={styles.root} component={Link} href="/about">To about us</Button>
    </main>
  )
}
