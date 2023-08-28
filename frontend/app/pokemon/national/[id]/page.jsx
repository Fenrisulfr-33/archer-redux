// 'use client';

// import { useRouter } from "next/navigation";
import PokemonPage from "@/components/pokemon/PokemonPage";

export default async function NationalInd({ params }) {
  console.log('params', params);
  // const router = useRouter();
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/national/${params.id}`);
  const pokemon = await response.json();

  return (
      <PokemonPage
        // key={router.asPath}
        pokemon={pokemon}
        goBackRoute={"/pokemon/national"}
      />
  );
}