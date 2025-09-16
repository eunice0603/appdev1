import './App.css'

// If...else Syntax

function AdminPanel() {
  return (
    <h1>Admin Panel</h1>
  );
}

function LoginForm() {
  return <h1>Login Form</h1>;
}

export default function AboutPage() {  
  const isLoggedIn = true;

  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>
      {content}
    </div>
  );
}

// Conditional ? Operator

export default function AboutPage() {

  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

// Logical && Syntax

export default function AboutPage() {

  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn && <AdminPanel />}
    </div>
  );
}