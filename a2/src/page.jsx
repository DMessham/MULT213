import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import githubLogo from './assets/github-mark-white.svg';

export function Header(props){
    let navArray = [
        {
            url: "https://dmessham.ca",
            text: "DMessham.ca",
            type: 'imgText',
            imgSrc: "https://dmessham.ca/icons/profpic_gradient-64.png"
        },
        {
            url: "https://dmessham.com/blog",
            text: "blog",
            type: 'text'
        },
        {
            url: "https://dmessham.com/projects",
            text: "projects",
            type: 'text'
        },
        {
            url: "https://dmessham.ca/school",
            text: "school",
            type: 'text',
        }
    ]

    let navOutput=[]
    for(let i=0; i< navArray.length; i++) {
        navOutput[i]=makeLink(navArray[i]);
    }
    return (<>
      <header className="mainhead">
        <nav >
            <div className='contentW'>
                {navOutput}
            </div>
        </nav>
        <div className='contentW'>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </div>
          
        </header>
    </>)
  }

export function makeLink(props){
    let linkContent = <></>
    switch (props.type) {
        case "text":
            linkContent =<>{props.text}</>
            break;
        case "img":
            linkContent = <><img src={props.imgSrc} width='auto' height='auto' maxwidth='32px' maxheight="32px" className="logo" alt={props.text} /></>
            break;
        case "imgText":
            linkContent = <><img src={props.imgSrc} className="logo" alt="logo" />{props.text}</>
            break;
        default:
            linkContent = <>{props}</>;
            break;
    }
    return(
        <>
            <a href={props.url}>
                {linkContent}
            </a>
        </>
    )
}

export function Footer(props){

    let linkArray = [
        {
            url: "https://dmessham.ca",
            text: "My site",
            type: 'imgText',
            imgSrc: "https://dmessham.ca/icons/profpic_gradient-32.png"
        },
        {
            url: "https://react.dev",
            text: "react",
            type: 'imgText',
            imgSrc: reactLogo,
        },
        {
            url: "https://vite.dev",
            text: "vite",
            type: 'imgText',
            imgSrc: viteLogo
        },
        {
            url: "https://github.com/DMessham/MULT213/tree/main/a2",
            text: "github project",
            type: 'imgText',
            imgSrc: githubLogo
        }
    ]

    let linksOutput=[]
    for(let i=0; i< linkArray.length; i++) {
        linksOutput[i]=makeLink(linkArray[i]);
    }
    console.log("finished linkset", linksOutput)

    return (<>
        <footer>
            <div className='contentW'>
            <p className="read-the-docs">
                    {props.message}
                </p>
                <p className="read-the-docs">
                    {props.helptext}
                </p>
                {linksOutput}
            </div>
            
        </footer>
    </>)
  }