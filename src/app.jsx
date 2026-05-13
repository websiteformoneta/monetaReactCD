// App entry — hash router + modal state

const ROUTES = {
  "#/":                { Component: () => window.HomePage,     label: "Home" },
  "#/platform":        { Component: () => window.PlatformPage, label: "Platform" },
  "#/finops-services": { Component: () => window.FinOpsPage,   label: "FinOps Services" },
  "#/why-moneta":      { Component: () => window.WhyPage,      label: "Why moneta" },
};

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash || "#/");
  React.useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
}

function App() {
  const hash = useHashRoute();
  const [demoOpen, setDemoOpen] = React.useState(false);
  const route = ROUTES[hash] || ROUTES["#/"];
  const Page = route.Component();

  React.useEffect(() => {
    const titles = {
      "#/":                "moneta — Cloud Reseller Billing",
      "#/platform":        "Platform — moneta",
      "#/finops-services": "FinOps Managed Services — moneta",
      "#/why-moneta":      "Why moneta — moneta",
    };
    document.title = titles[hash] || titles["#/"];
  }, [hash]);

  return (
    <React.Fragment>
      <Header onDemoClick={() => setDemoOpen(true)} />
      <main>
        {Page ? <Page onDemoClick={() => setDemoOpen(true)} /> : null}
      </main>
      <Footer onDemoClick={() => setDemoOpen(true)} />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
