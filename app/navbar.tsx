export default function NavBar() {
    // typescript inline interface definition of a native array of objects
    const navElements: {name: string, id: string}[] = [
        {name: "Home", id: "1"},
        {name: "Blog", id: "2"},
        {name: "Projects", id: "3"},
        {name: "Contact", id: "4"}
    ]

    return (
        // key needs to be used on the instantiation of the element, but not in the actual declaration of the element below
        <nav>
            {navElements.map((element) => (<NavElement text={element.name} key={element.id}/>))}
        </nav>
    )
}

function NavElement({text}: {text: string}) {
    return (
        <div className="border-8 border-white">
            <a>{text}</a>
        </div>
    )
}