const playerpedia = [
  {
    name: "Ronaldo",
    description:
      "Cristiano Ronaldo in full Cristiano Ronaldo dos Santos Aveiro (bornFebruary 5 1985 Funchal Madeira Portugal) Portuguese football(soccer) forward who was one of the greatest players of his generation.Ronaldos father José Dinis Aveiro was the equipment manager for thelocal club Andorinha",
    img: "https://media.gettyimages.com/photos/cristiano-ronaldo-of-manchester-united-poses-after-signing-for-the-picture-id1337497866?s=612x612",
  },
  {
    name: "Messi",
    description:
      "Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwc5iNfXTFLiM6KQ_FFlwrYtTOPZscldo1g&usqp=CAU",
  },
  {
    name: "De Bruyne",
    description:
      " Kevin De Bruyne is a Belgian professional footballer who plays as a midfielder for Premier League club Manchester City and the Belgium national team. He is widely regarded as one of the best players in the world and of his generation. Pundits have often described him as a complete footballer",
    img: "https://imageio.forbes.com/specials-images/imageserve/62e294cc66aba48d559932d6/Manchester-City-Puma-Kit-Launch/960x0.jpg?format=jpg&width=960",
  },
  {
    name: "Haaland",
    description:
      " Erling Braut Haaland is a Norwegian professional footballer who plays as a striker for Premier League club Manchester City and the Norway national team. Considered one of the best players in the world, he is known for his athleticism, speed and finishing",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Neuer",
    description:
      "Manuel Peter Neuer is a German professional footballer who plays as a goalkeeper and captains both Bundesliga club Bayern Munich and the Germany national team. He is regarded as one of the greatest goalkeepers in the history of the sport",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInUE_Go_wzoCphBCvV6i9D6e5rskW5vs_lA&usqp=CAU",
  },
  {
    name: "Benzema",
    description:
      "Karim Mostafa Benzema is a French professional footballer who plays as a striker for La Liga club Real Madrid and the France national team. A creative and prolific forward known for his playmaking and finishing, Benzema is widely regarded as one of the best strikers of his generation",
    img: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F02%2F1192510411-850x560.jpeg",
  },
  {
    name: "Ramos",
    description:
      "Sergio Ramos García is a Spanish professional footballer who plays as a centre-back for Ligue 1 club Paris Saint-Germain and the Spain national team.",
    img: "https://img.a.transfermarkt.technology/portrait/big/25557-1640014004.jpg?lm=1",
  },
  {
    name: "Lewandowski",
    description:
      "Robert Lewandowski is a Polish professional footballer who plays as a striker for La Liga club Barcelona and captains the Poland national team.",
    img: "data:image/jpeg;base64,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",
  },
]

export default playerpedia