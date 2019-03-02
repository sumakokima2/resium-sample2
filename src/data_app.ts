export default async function loadData() {
  const data = await fetch("src/data_app.csv", {
      credentials: "same-origin",
    }).then(r => r.text());

  const csv = data
    .split("\n")
    .map(d => d.split(",").map(dd => dd.trim()))
    .filter(d => d.length > 0);

  return {
    data: csv.map((d, i) => ({
      id: i.toString(),
      name: d[1],
      show:true,
      lon: parseFloat(d[2]),
      lat: parseFloat(d[3])
    }))
  };
}
