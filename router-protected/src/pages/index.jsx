

export const Landing = () => <h2>Landing Page (PUBLIC)</h2>;

export const Home = () => {
 
  return <h2>Home Page (PRIVATE)</h2>;
};

export const Dashboard = () => <h2>Dashboard Page (PRIVATE)</h2>;

export const Analitycs = () => (
  <h2>Analitycs (PRIVATE, permission: "analize")</h2>
);

export const Admin = () => <h2>Admin Page (PRIVATE, permission: "admin")</h2>;
