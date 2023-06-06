interface HeaderProps{
  username:string;
  image:string;
}

const Header:React.FC<HeaderProps>=({username, image})=>{
  return (
    <header>
      <button>종버튼</button>
      <button>설정버튼</button>
      <img src={image} alt={`${username} 프로필 사진`}/>
      <span>{username}</span>
      <button>메뉴</button>
    </header>
  )
}

export default Header;