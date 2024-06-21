import {byLetter, byWord} from './splitting.js'
const splitTargets = document.querySelectorAll('[split-by]')

splitTargets.forEach(node => {
    const type = node.getAttribute('split-by')
    let nodes = null

    console.log(type)

    if (type === 'letter')
    nodes = byLetter(node.innerText)
    else if (type === 'word')
    nodes = byWord(node.innerText)

    if (nodes)
    node.firstChild.replaceWith(...nodes)
})