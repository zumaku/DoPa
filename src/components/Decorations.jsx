const Decor = (props) => {
    if(props.id === 1){
        return (
            <svg width="43" height="32" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 18L0 2L18.5 0.5C20 7.5 18 19.3 18 20.5C18 21.7 12.6667 27 6 31.5L8 21.5L1 18Z" fill="#428A6F"/>
                <path d="M24.5 17.5L23.5 1.5L42 0C43.5 7 41.5 18.8 41.5 20C41.5 21.2 36.1667 26.5 29.5 31L31.5 21L24.5 17.5Z" fill="#428A6F"/>
            </svg>
        )
    } else if(props.id === 2){
        return (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 40H0V0C22.0914 0 40 17.9086 40 40Z" fill="#00C493"/>
            </svg>
        )
    } else if(props.id === 3){
        return (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40H40V20Z" fill="#0D9B79"/>
            </svg>
        )
    } else if(props.id === 4){
        return (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H40V40C17.9086 40 0 22.0914 0 0Z" fill="#F7AF2F"/>
            </svg>
        )
    } else if(props.id === 5){  // Arrow
        return (
            <svg width="102" height="114" viewBox="0 0 102 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.6646 36.7191C93.6542 42.8674 102.533 90.8015 100.098 114C112.127 30.6562 64.1545 13.236 38.6646 14.9438V0L0 29.4607L38.6646 54.6517V36.7191Z" fill="#00C493"/>
            </svg>
        )
    }

    return(<></>)
}

export default Decor