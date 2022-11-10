import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {

        document.title = `${title} - Candid Captures`;
    }, [title])
}

export default UseTitle;