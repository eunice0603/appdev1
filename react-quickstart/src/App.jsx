import './App.css'

// const user = { 
//   name: 'Eunice', 
//   imageUrl: 'https://i.pinimg.com/736x/c2/ba/55/c2ba553cdec2bdeed28ffa2223e93d4c.jpg',
// };

// function AboutPage() {  
//   return (
//     <>
//       <h1>
//         {user.name}
//       </h1>

//       <img
//         className="avatar"
//         src={user.imageUrl}
//       />
//     </>
//   );
// }

// export default AboutPage

const user = {
  name: 'Eunice',
  imageUrl: 'https://i.pinimg.com/736x/c2/ba/55/c2ba553cdec2bdeed28ffa2223e93d4c.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
