type Props = {
  params: { id: string };
};

export default async function CamperDetailsPage({ params }: Props) {
  const { id } = await params;
  return <main>Camper ID: {id}</main>;
}
