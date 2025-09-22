import Header from "../components/header";

export const meta = () => {
  return [
    { title: "blog" },
    { name: "description", content: "Truthsayersblog" },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
    </div>
  );
}
