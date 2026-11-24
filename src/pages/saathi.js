import React from "react"
import NewWebsite, { NewWebsiteHead } from "../components/NewWebsite"
import content from "../data/new-web/saathi.json"
export default function Page() { return <NewWebsite content={content} /> }
export function Head() { return <NewWebsiteHead content={content} /> }
