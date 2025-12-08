import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

export function Header(props){
    return (<>
      <header className="mainhead">
        <div className='contentW'>
            <h1>{props.title}</h1>
            <p>Dootis - Daniel Messham 2025</p>
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
            text: "DMessham.ca",
            type: 'img',
            imgSrc: "https://dmessham.ca/icons/profpic_gradient-32.png"
        },
        {
            url: "https://react.dev",
            text: "react",
            type: 'img',
            imgSrc: reactLogo,
        },
        {
            url: "https://vite.dev",
            text: "vite",
            type: 'img',
            imgSrc: viteLogo
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
                    {props.helptext}
                </p>
                {linksOutput}
            </div>
            
        </footer>
    </>)
  }