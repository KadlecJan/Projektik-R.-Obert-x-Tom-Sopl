import Footer from "../components/footer";
import Homepage from "../components/homepage";

export const meta = () => {
  return [
    { title: "blog" },
    { name: "description", content: "Truthsayersblog" },
  ];
};

export default function Index() {
  return (
    <div>
      <Homepage />
      <Footer />
    </div>
  );
}
