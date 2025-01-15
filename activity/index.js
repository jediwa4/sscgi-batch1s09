function handleBattleCase(numofpokemon, trainer1, trainer2) {
  let openingW1;
  let opening1;
  let pokemon1 = trainer1.pokemons[0];
  let pokemon2 = trainer2.pokemons[0];
  let green22 = "color:green; font-size:22px;";
  switch (numofpokemon) {
    case 1:
      opening1 = new Battle(pokemon1, pokemon2);
      openingW1 = opening1.startBattle();
      return openingW1;
    case 2:
      opening1 = new Battle(pokemon1, pokemon2);
      openingW1 = opening1.startBattle();
      if (openingW1 == pokemon1) {
        pokemon2 = trainer2.pokemons[1];

        opening1 = new Battle(pokemon1, pokemon2);
        openingW1 = opening1.startBattle();
        if (openingW1 == pokemon2) {
          pokemon2 = trainer2.pokemons[1];
          pokemon1 = trainer1.pokemons[1]; // 0
          opening1 = new Battle(pokemon1, pokemon2);
          openingW1 = opening1.startBattle();
          console.log(`%c${openingW1.trainer} wins this round`, green22);
          return openingW1;
        } else {
          console.log(`%c${openingW1.trainer} wins this round`, green22);
          return openingW1;
        }
      } else if (openingW1 == pokemon2) {
        pokemon1 = trainer1.pokemons[1];
        opening1 = new Battle(pokemon1, pokemon2);
        openingW1 = opening1.startBattle();
        if (openingW1 == pokemon1) {
          pokemon2 = trainer2.pokemons[1];
          pokemon1 = trainer1.pokemons[1]; // 0
          opening1 = new Battle(pokemon1, pokemon2);
          openingW1 = opening1.startBattle();
          console.log(`%c${openingW1.trainer} wins this round`, green22);
          return openingW1;
        } else {
          console.log(`%c${openingW1.trainer} wins this round`, green22);
          return openingW1;
        }
      }
      return openingW1;
    case 3:
      opening1 = new Battle(pokemon1, pokemon2);
      openingW1 = opening1.startBattle(); // 0 vs 0
      if (openingW1 == pokemon1) {
        pokemon2 = trainer2.pokemons[1];

        opening1 = new Battle(pokemon1, pokemon2);
        openingW1 = opening1.startBattle(); // 0 vs 1
        if (openingW1 == pokemon2) {
          pokemon2 = trainer2.pokemons[1];
          pokemon1 = trainer1.pokemons[1];
          opening1 = new Battle(pokemon1, pokemon2);
          openingW1 = opening1.startBattle(); // 1 vs 1
          if (openingW1 == pokemon1) {
            pokemon2 = trainer2.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2);
            openingW1 = opening1.startBattle(); // 1 vs 2
            if (openingW1 == pokemon1) {
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 2 vs 2
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            }
          } else if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2);
            openingW1 = opening1.startBattle(); // 2 vs 1
            if (openingW1 == pokemon2) {
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            } else if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 2 vs 2
            }
          }
        } else if (openingW1 == pokemon1) {
          pokemon2 = trainer2.pokemons[2];
          opening1 = new Battle(pokemon1, pokemon2);
          openingW1 = opening1.startBattle(); // 0 vs 2
          if (openingW1 == pokemon1) {
            console.log(`%c${openingW1.trainer} wins this round`, green22);
            return openingW1;
          } else if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[1];
            opening1 = new Battle(pokemon1, pokemon2);
            openingW1 = opening1.startBattle(); // 1 vs 2
            if (openingW1 == pokemon1) {
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 2 vs 2
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            }
          }
        }
      } else if (openingW1 == pokemon2) {
        pokemon1 = trainer1.pokemons[1];
        opening1 = new Battle(pokemon1, pokemon2); // 1 vs 0
        openingW1 = opening1.startBattle();
        if (openingW1 == pokemon1) {
          pokemon2 = trainer2.pokemons[1];
          pokemon1 = trainer1.pokemons[1];
          opening1 = new Battle(pokemon1, pokemon2); // 1 vs 1
          openingW1 = opening1.startBattle();
          if (openingW1 == pokemon1) {
            pokemon2 = trainer2.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2); // 1 vs 2
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon1) {
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2); // 2 vs 2
              openingW1 = opening1.startBattle();
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            }
          } else if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2); // 2 vs 1
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon2) {
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            } else if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2); // 2 vs 2
              openingW1 = opening1.startBattle();
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            }
          }
        } else if (openingW1 == pokemon2) {
          pokemon1 = trainer1.pokemons[2];
          opening1 = new Battle(pokemon1, pokemon2); // 0 vs 2
          openingW1 = opening1.startBattle();
          if (openingW1 == pokemon2) {
            console.log(`%c${openingW1.trainer} wins this round`, green22);
            return openingW1;
          } else if (openingW1 == pokemon1) {
            pokemon2 = trainer2.pokemons[1];
            opening1 = new Battle(pokemon1, pokemon2); // 1 vs 2
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon2) {
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            } else if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2); // 2 vs 2
              openingW1 = opening1.startBattle();
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            }
          }
        }
      }
      return openingW1;
    case 4:
      opening1 = new Battle(pokemon1, pokemon2);
      openingW1 = opening1.startBattle(); // 0 vs 0
      if (openingW1 == pokemon1) {
        pokemon2 = trainer2.pokemons[1];

        opening1 = new Battle(pokemon1, pokemon2);
        openingW1 = opening1.startBattle(); // 0 vs 1
        if (openingW1 == pokemon2) {
          pokemon2 = trainer2.pokemons[1];
          pokemon1 = trainer1.pokemons[1];
          opening1 = new Battle(pokemon1, pokemon2);
          openingW1 = opening1.startBattle(); // 1 vs 1
          if (openingW1 == pokemon1) {
            pokemon2 = trainer2.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2);
            openingW1 = opening1.startBattle(); // 1 vs 2
            if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 1 vs 3
              if (openingW1 == pokemon1) {
                console.log(`%c${openingW1.trainer} wins this round`, green22);
                return openingW1;
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 2 vs 3
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              }
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 2 vs 2
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 2 vs 3
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 3 vs 2
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              }
            }
          } else if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2);
            openingW1 = opening1.startBattle(); // 2 vs 1
            if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 2 vs 2
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 2 vs 3
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 3 vs 2
                if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              }
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 3 vs 1
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 3 vs 2
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              } else if (openingW1 == pokemon2) {
                console.log(`%c${openingW1.trainer} wins this round`, green22);
                return openingW1;
              }
            }
          }
        } else if (openingW1 == pokemon1) {
          pokemon2 = trainer2.pokemons[2];
          opening1 = new Battle(pokemon1, pokemon2);
          openingW1 = opening1.startBattle(); // 0 vs 2
          if (openingW1 == pokemon1) {
            pokemon2 = trainer2.pokemons[3];
            opening1 = new Battle(pokemon1, pokemon2);
            openingW1 = opening1.startBattle(); // 0 vs 3
            if (openingW1 == pokemon1) {
              console.log(`%c${openingW1.trainer} wins this round`, green22);
              return openingW1;
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[1];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 1 vs 3
              if (openingW1 == pokemon1) {
                console.log(`%c${openingW1.trainer} wins this round`, green22);
                return openingW1;
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 2 vs 3
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              }
            }
          } else if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[1];
            opening1 = new Battle(pokemon1, pokemon2);
            openingW1 = opening1.startBattle(); // 1 vs 2
            if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 1 vs 3
              if (openingW1 == pokemon1) {
                console.log(`%c${openingW1.trainer} wins this round`, green22);
                return openingW1;
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 2 vs 3
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              }
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 2 vs 2
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 2 vs 3
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 3 vs 2
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              }
            }
          }
        }
      } else if (openingW1 == pokemon2) {
        pokemon1 = trainer1.pokemons[1];
        opening1 = new Battle(pokemon1, pokemon2); // 1 vs 0
        openingW1 = opening1.startBattle();
        if (openingW1 == pokemon1) {
          pokemon2 = trainer2.pokemons[1];
          pokemon1 = trainer1.pokemons[1];
          opening1 = new Battle(pokemon1, pokemon2); // 1 vs 1
          openingW1 = opening1.startBattle();
          if (openingW1 == pokemon1) {
            pokemon2 = trainer2.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2); // 1 vs 2
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2); // 1 vs 3
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon1) {
                console.log(`%c${openingW1.trainer} wins this round`, green22);
                return openingW1;
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              }
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2); // 2 vs 2
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); // 3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              }
            }
          } else if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2); // 2 vs 1
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2); // 2 vs 2
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); // 3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              }
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2); // 3 vs 1
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2); // 3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              } else if (openingW1 == pokemon2) {
                console.log(`%c${openingW1.trainer} wins this round`, green22);
                return openingW1;
              }
            }
          }
        } else if (openingW1 == pokemon2) {
          pokemon1 = trainer1.pokemons[2];
          opening1 = new Battle(pokemon1, pokemon2); // 0 vs 2
          openingW1 = opening1.startBattle();
          if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[3];
            opening1 = new Battle(pokemon1, pokemon2); // 0 vs 3
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon2) {
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 0 vs 0
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[1];

                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 0 vs 1
                if (openingW1 == pokemon2) {
                  pokemon2 = trainer2.pokemons[1];
                  pokemon1 = trainer1.pokemons[1];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 1 vs 1
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[2];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 1 vs 2
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[3];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 1 vs 3
                      if (openingW1 == pokemon1) {
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      } else if (openingW1 == pokemon2) {
                        pokemon1 = trainer1.pokemons[2];
                        opening1 = new Battle(pokemon1, pokemon2);
                        openingW1 = opening1.startBattle(); // 2 vs 3
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon1 = trainer1.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2);
                          openingW1 = opening1.startBattle(); // 3 vs 3
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      }
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[2];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 2 vs 2
                      if (openingW1 == pokemon1) {
                        pokemon2 = trainer2.pokemons[3];
                        opening1 = new Battle(pokemon1, pokemon2);
                        openingW1 = opening1.startBattle(); // 2 vs 3
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon1 = trainer1.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2);
                          openingW1 = opening1.startBattle(); // 3 vs 3
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      } else if (openingW1 == pokemon2) {
                        pokemon1 = trainer1.pokemons[3];
                        opening1 = new Battle(pokemon1, pokemon2);
                        openingW1 = opening1.startBattle(); // 3 vs 2
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon2 = trainer2.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2);
                          openingW1 = opening1.startBattle(); // 3 vs 3
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      }
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[2];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 2 vs 1
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[2];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 2 vs 2
                      if (openingW1 == pokemon1) {
                        pokemon2 = trainer2.pokemons[3];
                        opening1 = new Battle(pokemon1, pokemon2);
                        openingW1 = opening1.startBattle(); // 2 vs 3
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon1 = trainer1.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2);
                          openingW1 = opening1.startBattle(); // 3 vs 3
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      } else if (openingW1 == pokemon2) {
                        pokemon1 = trainer1.pokemons[3];
                        opening1 = new Battle(pokemon1, pokemon2);
                        openingW1 = opening1.startBattle(); // 3 vs 2
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon2 = trainer2.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2);
                          openingW1 = opening1.startBattle(); // 3 vs 3
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      }
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[3];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 3 vs 1
                      if (openingW1 == pokemon1) {
                        pokemon2 = trainer2.pokemons[2];
                        opening1 = new Battle(pokemon1, pokemon2);
                        openingW1 = opening1.startBattle(); // 3 vs 2
                        if (openingW1 == pokemon1) {
                          pokemon2 = trainer2.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2);
                          openingW1 = opening1.startBattle(); // 3 vs 3
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      } else if (openingW1 == pokemon2) {
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      }
                    }
                  }
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 0 vs 2
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 0 vs 3
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[1];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 1 vs 3
                      if (openingW1 == pokemon1) {
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      } else if (openingW1 == pokemon2) {
                        pokemon1 = trainer1.pokemons[2];
                        opening1 = new Battle(pokemon1, pokemon2);
                        openingW1 = opening1.startBattle(); // 2 vs 3
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon1 = trainer1.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2);
                          openingW1 = opening1.startBattle(); // 3 vs 3
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      }
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[1];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 1 vs 2
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[3];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 1 vs 3
                      if (openingW1 == pokemon1) {
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      } else if (openingW1 == pokemon2) {
                        pokemon1 = trainer1.pokemons[2];
                        opening1 = new Battle(pokemon1, pokemon2);
                        openingW1 = opening1.startBattle(); // 2 vs 3
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon1 = trainer1.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2);
                          openingW1 = opening1.startBattle(); // 3 vs 3
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      }
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[2];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 2 vs 2
                      if (openingW1 == pokemon1) {
                        pokemon2 = trainer2.pokemons[3];
                        opening1 = new Battle(pokemon1, pokemon2);
                        openingW1 = opening1.startBattle(); // 2 vs 3
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon1 = trainer1.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2);
                          openingW1 = opening1.startBattle(); // 3 vs 3
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      } else if (openingW1 == pokemon2) {
                        pokemon1 = trainer1.pokemons[3];
                        opening1 = new Battle(pokemon1, pokemon2);
                        openingW1 = opening1.startBattle(); // 3 vs 2
                        if (openingW1 == pokemon1) {
                          pokemon2 = trainer2.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2);
                          openingW1 = opening1.startBattle(); // 3 vs 3
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      }
                    }
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[1];
                opening1 = new Battle(pokemon1, pokemon2); // 1 vs 0
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[1];
                  pokemon1 = trainer1.pokemons[1];
                  opening1 = new Battle(pokemon1, pokemon2); // 1 vs 1
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[2];
                    opening1 = new Battle(pokemon1, pokemon2); // 1 vs 2
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[3];
                      opening1 = new Battle(pokemon1, pokemon2); // 1 vs 3
                      openingW1 = opening1.startBattle();
                      if (openingW1 == pokemon1) {
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      } else if (openingW1 == pokemon2) {
                        pokemon1 = trainer1.pokemons[2];
                        opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                        openingW1 = opening1.startBattle();
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon1 = trainer1.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                          openingW1 = opening1.startBattle();
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      }
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[2];
                      opening1 = new Battle(pokemon1, pokemon2); // 2 vs 2
                      openingW1 = opening1.startBattle();
                      if (openingW1 == pokemon1) {
                        pokemon2 = trainer2.pokemons[3];
                        opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                        openingW1 = opening1.startBattle();
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon1 = trainer1.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                          openingW1 = opening1.startBattle();
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      } else if (openingW1 == pokemon2) {
                        pokemon1 = trainer1.pokemons[3];
                        opening1 = new Battle(pokemon1, pokemon2); // 3 vs 2
                        openingW1 = opening1.startBattle();
                        if (openingW1 == pokemon1) {
                          pokemon2 = trainer2.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                          openingW1 = opening1.startBattle();
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      }
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[2];
                    opening1 = new Battle(pokemon1, pokemon2); // 2 vs 1
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[2];
                      opening1 = new Battle(pokemon1, pokemon2); // 2 vs 2
                      openingW1 = opening1.startBattle();
                      if (openingW1 == pokemon1) {
                        pokemon2 = trainer2.pokemons[3];
                        opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                        openingW1 = opening1.startBattle();
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon1 = trainer1.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                          openingW1 = opening1.startBattle();
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      } else if (openingW1 == pokemon2) {
                        pokemon1 = trainer1.pokemons[3];
                        opening1 = new Battle(pokemon1, pokemon2); // 3 vs 2
                        openingW1 = opening1.startBattle();
                        if (openingW1 == pokemon1) {
                          pokemon2 = trainer2.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                          openingW1 = opening1.startBattle();
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      }
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[3];
                      opening1 = new Battle(pokemon1, pokemon2); // 3 vs 1
                      openingW1 = opening1.startBattle();
                      if (openingW1 == pokemon1) {
                        pokemon2 = trainer2.pokemons[2];
                        opening1 = new Battle(pokemon1, pokemon2); // 3 vs 2
                        openingW1 = opening1.startBattle();
                        if (openingW1 == pokemon1) {
                          pokemon2 = trainer2.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                          openingW1 = opening1.startBattle();
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      } else if (openingW1 == pokemon2) {
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      }
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2); // 0 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 0 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[1];
                      opening1 = new Battle(pokemon1, pokemon2); // 1 vs 3
                      openingW1 = opening1.startBattle();
                      if (openingW1 == pokemon1) {
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      } else if (openingW1 == pokemon2) {
                        pokemon1 = trainer1.pokemons[2];
                        opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                        openingW1 = opening1.startBattle();
                        if (openingW1 == pokemon1) {
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        } else if (openingW1 == pokemon2) {
                          pokemon1 = trainer1.pokemons[3];
                          opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                          openingW1 = opening1.startBattle();
                          console.log(
                            `%c${openingW1.trainer} wins this round`,
                            green22
                          );
                          return openingW1;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return openingW1;
    case 5:
      opening1 = new Battle(pokemon1, pokemon2);
      openingW1 = opening1.startBattle(); // 0 vs 0
      if (openingW1 == pokemon1) {
        pokemon2 = trainer2.pokemons[1];
        opening1 = new Battle(pokemon1, pokemon2);
        openingW1 = opening1.startBattle(); // 0 vs 1
        if (openingW1 == pokemon1) {
          pokemon2 = trainer2.pokemons[2];
          opening1 = new Battle(pokemon1, pokemon2);
          openingW1 = opening1.startBattle(); // 0 vs 2
          if (openingW1 == pokemon1) {
            pokemon2 = trainer2.pokemons[3];
            opening1 = new Battle(pokemon1, pokemon2);
            openingW1 = opening1.startBattle(); // 0 vs 3
            if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[4];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 0 vs 4
              if (openingW1 == pokemon1) {
                console.log(`%c${openingW1.trainer} wins this round`, green22);
                return openingW1;
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[1];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 1 vs 4
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 2 vs 4
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 3 vs 4
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 4 vs 4
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[1];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 1 vs 3
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[4];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 1 vs 4
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 2 vs 4
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 3 vs 4
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 4 vs 4
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 2 vs 3
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 2 vs 4
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 3 vs 4
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 4 vs 4
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 3 vs 4
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 4 vs 4
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 4 vs 3
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 4 vs 4
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            }
          } else if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[1];
            opening1 = new Battle(pokemon1, pokemon2);
            openingW1 = opening1.startBattle(); // 1 vs 2
            if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 1 vs 3
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[4];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 1 vs 4
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 2 vs 4
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 3 vs 4
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 4 vs 4
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 2 vs 3
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 2 vs 4
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 3 vs 4
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 4 vs 4
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 3
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 3 vs 4
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 4 vs 4
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 4 vs 3
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); // 4 vs 4
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); // 3 vs 2
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 3 vs 3
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 3 vs 4
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 4 vs 4
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 4 vs 3
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 4 vs 4
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[4];
                opening1 = new Battle(pokemon1, pokemon2);
                openingW1 = opening1.startBattle(); // 4 vs 2
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2);
                  openingW1 = opening1.startBattle(); // 4 vs 3
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); // 4 vs 4
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  }
                } else if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                }
              }
            }
          }
        } else if (openingW1 == pokemon2) {
          pokemon1 = trainer1.pokemons[1];
          opening1 = new Battle(pokemon1, pokemon2);
          openingW1 = opening1.startBattle();
          //1 vs 1
          if (openingW1 == pokemon1) {
            pokemon2 = trainer2.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2); // 1 vs 2
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2); // 1 vs 3
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[4];
                opening1 = new Battle(pokemon1, pokemon2); // 1 vs 4
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2); // 2 vs 4
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); // 2 vs 4
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2); // 2 vs 2
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); // 2 vs 4
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); // 3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); // 4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  }
                }
              }
            }
          } else if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2); //2 vs 1
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2); //3 vs 1
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[4];
                opening1 = new Battle(pokemon1, pokemon2); //4 vs 1
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2); //4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2); //3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); //4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); //3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            } else if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2); //2 vs 2
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); //2 vs 3
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); //2 vs 4
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); //3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); //3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); //3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); //4 vs 4
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); //4 vs 3
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); //4 vs 4
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); //4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            }
          }
        }

        //should have 1 vs 1
      } else if (openingW1 == pokemon2) {
        pokemon1 = trainer1.pokemons[1];
        opening1 = new Battle(pokemon1, pokemon2); // 1 vs 0
        openingW1 = opening1.startBattle();
        if (openingW1 == pokemon1) {
          pokemon2 = trainer2.pokemons[1];
          opening1 = new Battle(pokemon1, pokemon2); // 1 vs 1
          openingW1 = opening1.startBattle();
          if (openingW1 == pokemon1) {
            pokemon2 = trainer2.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2); // 1 vs 2
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2); // 1 vs 3
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[4];
                opening1 = new Battle(pokemon1, pokemon2); // 1 vs 4
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2); // 2 vs 4
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); // 2 vs 4
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2); // 2 vs 2
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); // 2 vs 3
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); // 2 vs 4
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); // 3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); // 4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  }
                }
              }
            }
          } else if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[2];
            opening1 = new Battle(pokemon1, pokemon2); //2 vs 1
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2); //3 vs 1
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[4];
                opening1 = new Battle(pokemon1, pokemon2); //4 vs 1
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2); //4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2); //3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); //4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); //3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            } else if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2); //2 vs 2
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); //2 vs 3
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); //2 vs 4
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); //3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); //3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); //3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); //4 vs 4
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); //4 vs 3
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); //4 vs 4
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); //4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            }
          }
        } else if (openingW1 == pokemon2) {
          pokemon1 = trainer1.pokemons[2];
          opening1 = new Battle(pokemon1, pokemon2); // 2 vs 0
          openingW1 = opening1.startBattle();
          if (openingW1 == pokemon2) {
            pokemon1 = trainer1.pokemons[3];
            opening1 = new Battle(pokemon1, pokemon2); // 3 vs 0
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[4];
              opening1 = new Battle(pokemon1, pokemon2); // 4 vs 0
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon2) {
                console.log(`%c${openingW1.trainer} wins this round`, green22);
                return openingW1;
              } else if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[1];
                opening1 = new Battle(pokemon1, pokemon2); // 4 vs 1
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2); // 4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            } else if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[1];
              opening1 = new Battle(pokemon1, pokemon2); // 3 vs 1
              openingW1 = opening1.startBattle();
              if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[4];
                opening1 = new Battle(pokemon1, pokemon2); // 4 vs 1
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2); // 4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2); //3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); //4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); //3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            }
          } else if (openingW1 == pokemon1) {
            pokemon2 = trainer2.pokemons[1];
            opening1 = new Battle(pokemon1, pokemon2); // 2 vs 1
            openingW1 = opening1.startBattle();
            if (openingW1 == pokemon1) {
              pokemon2 = trainer2.pokemons[2];
              opening1 = new Battle(pokemon1, pokemon2); //2 vs 2
              openingW1 = opening1.startBattle();

              if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); //2 vs 3
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); //2 vs 4
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); //3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[3];
                opening1 = new Battle(pokemon1, pokemon2); //3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); //3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); //4 vs 4
                    }
                  } else if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2);
                    openingW1 = opening1.startBattle(); //4 vs 3
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2);
                      openingW1 = opening1.startBattle(); //4 vs 4
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); //4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
            } else if (openingW1 == pokemon2) {
              pokemon1 = trainer1.pokemons[3];
              opening1 = new Battle(pokemon1, pokemon2);
              openingW1 = opening1.startBattle(); //3 vs 1
              if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[4];
                opening1 = new Battle(pokemon1, pokemon2); //4 vs 1
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2); //4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              } else if (openingW1 == pokemon1) {
                pokemon2 = trainer2.pokemons[2];
                opening1 = new Battle(pokemon1, pokemon2); //3 vs 2
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[3];
                  opening1 = new Battle(pokemon1, pokemon2); //3 vs 3
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); //3 vs 4
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon1) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon2) {
                  pokemon1 = trainer1.pokemons[4];
                  opening1 = new Battle(pokemon1, pokemon2); //4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); //4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); //4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                }
              }
              if (openingW1 == pokemon2) {
                pokemon1 = trainer1.pokemons[4];
                opening1 = new Battle(pokemon1, pokemon2); // 4 vs 1
                openingW1 = opening1.startBattle();
                if (openingW1 == pokemon2) {
                  console.log(
                    `%c${openingW1.trainer} wins this round`,
                    green22
                  );
                  return openingW1;
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2); // 4 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    console.log(
                      `%c${openingW1.trainer} wins this round`,
                      green22
                    );
                    return openingW1;
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                      openingW1 = opening1.startBattle();
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    }
                  }
                } else if (openingW1 == pokemon1) {
                  pokemon2 = trainer2.pokemons[2];
                  opening1 = new Battle(pokemon1, pokemon2); // 3 vs 2
                  openingW1 = opening1.startBattle();
                  if (openingW1 == pokemon2) {
                    pokemon1 = trainer1.pokemons[4];
                    opening1 = new Battle(pokemon1, pokemon2); // 4 vs 2
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      console.log(
                        `%c${openingW1.trainer} wins this round`,
                        green22
                      );
                      return openingW1;
                    } else if (openingW1 == pokemon1) {
                      pokemon2 = trainer2.pokemons[3];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                      openingW1 = opening1.startBattle();
                      if (openingW1 == pokemon2) {
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      } else if (openingW1 == pokemon1) {
                        pokemon2 = trainer2.pokemons[4];
                        opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                        openingW1 = opening1.startBattle();
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      }
                    }
                  } else if (openingW1 == pokemon1) {
                    pokemon2 = trainer2.pokemons[3];
                    opening1 = new Battle(pokemon1, pokemon2); // 3 vs 3
                    openingW1 = opening1.startBattle();
                    if (openingW1 == pokemon2) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 3 vs 4
                      openingW1 = opening1.startBattle();
                      if (openingW1 == pokemon2) {
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      } else if (openingW1 == pokemon1) {
                        pokemon2 = trainer2.pokemons[4];
                        opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                        openingW1 = opening1.startBattle();
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      }
                    } else if (openingW1 == pokemon1) {
                      pokemon1 = trainer1.pokemons[4];
                      opening1 = new Battle(pokemon1, pokemon2); // 4 vs 3
                      openingW1 = opening1.startBattle();
                      if (openingW1 == pokemon2) {
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      } else if (openingW1 == pokemon1) {
                        pokemon2 = trainer2.pokemons[4];
                        opening1 = new Battle(pokemon1, pokemon2); // 4 vs 4
                        openingW1 = opening1.startBattle();
                        console.log(
                          `%c${openingW1.trainer} wins this round`,
                          green22
                        );
                        return openingW1;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return openingW1;
    default:
      throw new Error("Please reload");
  }
}

class Pokemon {
  constructor(name, type, level, hp, trainer) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.fullhp = 20 * level;
    this.hp = hp * level;
    this.trainer = trainer;
    this.wins = 0;
  }
  //attack the opponent and calculates the damage
  attack(opponent) {
    let damage = this.level * 2;
    let critical = "color:#880808; font-size: 15px;";

    if (Math.floor(Math.random() * 100) < 35) {
      damage = damage * 4;
      console.log(`${this.name} uses HYPER BEAM on ${opponent.name}`);
      console.log(`%cCRITICAL STRIKE!`, critical);
    } else {
      console.log(
        `${this.trainer} commands ${this.name} to attack ${opponent.name}!`
      );
    }

    opponent.receiveDamage(damage, this.name);
  }
  //receive damage from attack based on calculation of damage in attack(opponent)
  receiveDamage(damage, vs) {
    this.hp -= damage;
    if (this.hp < 0) {
      this.hp = 0;
    }
    console.log(
      `${this.name} received ${damage} damage from ${vs}! Remaining HP: ${this.hp}`
    );
  }
  //heal the user based on calculation and sets the defense in powerup
  heal() {
    let healAmount = Math.round(this.hp / 5);
    this.hp += healAmount;
    console.log(
      `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.`
    );
    this.powerup(0);
  }
  //contains powerup such as def
  powerup(def) {
    this.def = def;
  }
  heal2() {
    this.hp = this.fullhp;
  }
}

class Trainer {
  constructor(name, pokemons) {
    this.name = name;
    this.pokemons = pokemons;
    this.wins = 0;
    this.qualify = " ";
  }
  addWin() {
    let allpokemons = this.pokemons;
    allpokemons.forEach(function (element) {
      console.log(element.level);
    });
  }
}

//Pokemon with elements have different attacks with different calculation
class ElectricPokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Electric", level, hp, trainer);
  }
  attack(opponent) {
    let critical = "color:#880808; font-size: 15px;";
    let electriccolor = "color:#FFAC1C";

    let damage = this.level * 3;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 2;
      console.log(
        `%c${this.name} uses VOLT TACKLE on ${opponent.name}`,
        electriccolor
      );
      console.log(`%cCRITICAL STRIKE!`, critical);
    } else {
      console.log(
        `%c${this.name} uses Thunderbolt on ${opponent.name}`,
        electriccolor
      );
    }
    opponent.receiveDamage(damage, this.name);
  }
  heal() {
    let healAmount = Math.round(this.hp / 10);
    if (healAmount != 0) {
      this.hp += healAmount;
      console.log(
        `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.  ${this.name} will block the next move using Electric Terrain.`
      );
    } else {
      console.log(
        `${this.name} will block the next move using Electric Terrain.`
      );
    }
    this.powerup(1);
  }
  heal2() {
    this.hp = this.fullhp;
  }
}

class FirePokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Fire", level, hp, trainer);
  }
  attack(opponent) {
    let critical = "color:#880808; font-size: 15px;";
    let firecolor = "color:#CC5500";

    let damage = this.level * 3;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 2;
      console.log(
        `%c${this.name} uses FLAMETHROWER on ${opponent.name}`,
        firecolor
      );
      console.log(`%cCRITICAL STRIKE!`, critical);
    } else {
      console.log(
        `%c${this.name} uses Fire Blast on ${opponent.name}`,
        firecolor
      );
    }
    opponent.receiveDamage(damage, this.name);
  }
  heal() {
    let healAmount = Math.round(this.hp / 10);
    if (healAmount != 0) {
      this.hp += healAmount;
      console.log(
        `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.  ${this.name} will block the next move using Flame Body.`
      );
    } else {
      console.log(`${this.name} will block the next move using Flame Body.`);
    }
    this.powerup(1);
  }
  heal2() {
    this.hp = this.fullhp;
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Water", level, hp, trainer);
  }
  attack(opponent) {
    let critical = "color:#880808; font-size: 15px;";
    let watercolor = "color:#00FFFF";

    let damage = this.level * 3;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 2;
      console.log(
        `%c${this.name} uses HYDRO PUMP on ${opponent.name}`,
        watercolor
      );
      console.log(`%cCRITICAL STRIKE!`, critical);
    } else {
      console.log(
        `%c${this.name} uses Water Gun on ${opponent.name}`,
        watercolor
      );
    }
    opponent.receiveDamage(damage, this.name);
  }
  heal() {
    let healAmount = Math.round(this.hp / 6);
    if (healAmount != 0) {
      this.hp += healAmount;
      console.log(
        `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.  ${this.name} will block the next move using Aqua Ring.`
      );
    } else {
      console.log(`${this.name} will block the next move using Aqua Ring.`);
    }
    this.powerup(1);
  }
  heal2() {
    this.hp = this.fullhp;
  }
}

class DragonPokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Dragon", level, hp, trainer);
  }
  attack(opponent) {
    let critical = "color:#880808; font-size: 15px;";
    let dragoncolor = "color:#953553";

    let damage = this.level * 3;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 2;
      console.log(
        `%c${this.name} uses DRACO METEOR on ${opponent.name}`,
        dragoncolor
      );
      console.log(`%cCRITICAL STRIKE!`, critical);
    } else {
      console.log(
        `%c${this.name} uses Dragon Breath on ${opponent.name}`,
        dragoncolor
      );
    }
    opponent.receiveDamage(damage, this.name);
  }
  heal() {
    let healAmount = Math.round(this.hp / 8);
    if (healAmount != 0) {
      this.hp += healAmount;
      console.log(
        `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.  ${this.name} will block the next move using Protect.`
      );
    } else {
      console.log(`${this.name} will block the next move using Protect.`);
    }
    this.powerup(1);
  }
  heal2() {
    this.hp = this.fullhp;
  }
}

class GrassPokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Grass", level, hp, trainer);
  }
  attack(opponent) {
    let critical = "color:#880808; font-size: 15px;";
    let grasscolor = "color:#ACE1AF";

    let damage = this.level * 3;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 2;
      console.log(
        `%c${this.name} uses SOLAR BEAM on ${opponent.name}`,
        grasscolor
      );
      console.log(`%cCRITICAL STRIKE!`, critical);
    } else {
      console.log(
        `%c${this.name} uses Leaf Blade on ${opponent.name}`,
        grasscolor
      );
    }
    opponent.receiveDamage(damage, this.name);
  }
  heal() {
    let healAmount = Math.round(this.hp / 8);
    if (healAmount != 0) {
      this.hp += healAmount;
      console.log(
        `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.  ${this.name} will block the next move using Flower Shield.`
      );
    } else {
      console.log(`${this.name} will block the next move using Flower Shield.`);
    }
    this.powerup(1);
  }
  heal2() {
    this.hp = this.fullhp;
  }
}

class PsychicPokemon extends Pokemon {
  constructor(name, level, hp, trainer) {
    super(name, "Psychic", level, hp, trainer);
  }
  attack(opponent) {
    let critical = "color:#880808; font-size: 15px;";
    let psychiccolor = "color:#F9629F";

    let damage = this.level * 3;
    if (Math.floor(Math.random() * 100) < 20) {
      damage = damage * 2;
      console.log(
        `%c${this.name} uses PSYCHIC on ${opponent.name}`,
        psychiccolor
      );
      console.log(`%cCRITICAL STRIKE!`, critical);
    } else {
      console.log(
        `%c${this.name} uses Psywave on ${opponent.name}`,
        psychiccolor
      );
    }
    opponent.receiveDamage(damage, this.name);
  }
  heal() {
    let healAmount = Math.round(this.hp / 8);
    if (healAmount != 0) {
      this.hp += healAmount;
      console.log(
        `${this.trainer} decides to use a potion to heal ${this.name} for ${healAmount}.  ${this.name} will block the next move using Guard Swap.`
      );
    } else {
      console.log(`${this.name} will block the next move using Guard Swap.`);
    }
    this.powerup(1);
  }
  heal2() {
    this.hp = this.fullhp;
  }
}
//declares the trainer and corresponding pokemons that they have
let pikachu = new ElectricPokemon("Pikachu", 9, 20, "Ash");
let charizard = new FirePokemon("Charizard", 10, 20, "Ash");
let sceptile = new GrassPokemon("Sceptile", 8, 20, "Ash");
let snorlax = new Pokemon("Snorlax", "Normal", 5, 20, "Ash");
let totodile = new WaterPokemon("Totodile", 5, 20, "Ash");

let blastoise = new WaterPokemon("Blastoise", 10, 20, "Gary");
let eevee = new Pokemon("Eevee", "Normal", 5, 20, "Gary");
let nidoking = new Pokemon("Nidoking", "Normal", 5, 20, "Gary");
let alakazam = new PsychicPokemon("Alakazam", 9, 20, "Gary");
let electivire = new ElectricPokemon("Electivire", 8, 20, "Gary");

let gyarados = new DragonPokemon("Gyarados", 9, 20, "Lance");
let dragonite = new DragonPokemon("Dragonite", 10, 20, "Lance");
let salamence = new DragonPokemon("Salamence", 5, 20, "Lance");
let kingdra = new DragonPokemon("Kingdra", 5, 20, "Lance");
let aerodactyl = new DragonPokemon("Aerodactyl", 8, 20, "Lance");

let ninetales = new FirePokemon("Ninetales", 5, 20, "Blaine");
let arcanine = new FirePokemon("Arcanine", 8, 20, "Blaine");
let rapidash = new FirePokemon("Rapidash", 5, 20, "Blaine");
let moltres = new FirePokemon("Moltres", 10, 20, "Blaine");
let magmar = new FirePokemon("Magmar", 9, 20, "Blaine");

let seaking = new WaterPokemon("Seaking", 5, 20, "Wallace");
let luvdisc = new WaterPokemon("Luvdisc", 5, 20, "Wallace");
let wailord = new WaterPokemon("Wailord", 8, 20, "Wallace");
let golduck = new WaterPokemon("Golduck", 9, 20, "Wallace");
let milotic = new WaterPokemon("Milotic", 10, 20, "Wallace");

let ash = new Trainer("Ash", [pikachu, charizard, sceptile, snorlax, totodile]);
let gary = new Trainer("Gary", [
  blastoise,
  eevee,
  nidoking,
  alakazam,
  electivire,
]);
let lance = new Trainer("Lance", [
  gyarados,
  dragonite,
  salamence,
  kingdra,
  aerodactyl,
]);
let blaine = new Trainer("Blaine", [
  ninetales,
  arcanine,
  rapidash,
  moltres,
  magmar,
]);
let wallace = new Trainer("Wallace", [
  seaking,
  luvdisc,
  wailord,
  golduck,
  milotic,
]);

//class Battle is responsible for the individual pokemon battles, the class is also called in the class Tournament
class Battle {
  constructor(pokemon1, pokemon2) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  startBattle() {
    let medred = "color:red; font-size:18px;";
    let smallred = "color:red";
    let gray = "color: #818589";
    console.log(`%c${this.pokemon1.name} vs ${this.pokemon2.name}`, medred);
    //each pokemon has a limit of 1 potion
    let potioncount = 1;
    let potioncount2 = 1;

    while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0) {
      /*heal is rng-based, if rngheal is set as 0 it will heal the pokemon as long as there are sufficient potion
      and pokemon hp is not 0.*/
      let rngheal = Math.floor(Math.random() * 2);
      let rngheal2 = Math.floor(Math.random() * 2);

      if (
        rngheal == 0 &&
        potioncount == 1 &&
        this.pokemon1.hp != 0 &&
        this.pokemon1.hp != this.pokemon1.fullhp
      ) {
        this.pokemon1.heal();
        potioncount = 0;
      } else {
        //if def value is 1, the pokemon will block the next attack
        if (this.pokemon2.def == 1) {
          this.pokemon2.def = 0;
          console.log(`%c${this.pokemon2.name} blocked the attack!`, gray);
        } else {
          this.pokemon1.attack(this.pokemon2);
        }
      }
      //pokemon will faint and be out of the battle, if hp is 0
      if (this.pokemon2.hp <= 0) {
        this.pokemon1.level = this.pokemon1.level + 1;
        this.pokemon1.fullhp = this.pokemon1.level * 20;
        console.log(
          `%c${this.pokemon2.name} fainted! ${this.pokemon1.name} wins and levels up to ${this.pokemon1.level}!`,
          smallred
        );

        return this.pokemon1;
      }
      if (
        rngheal2 == 0 &&
        potioncount2 == 1 &&
        this.pokemon2.hp != 0 &&
        this.pokemon2.hp != this.pokemon2.fullhp
      ) {
        this.pokemon2.heal();
        potioncount2 = 0;
      } else {
        if (this.pokemon1.def == 1) {
          this.pokemon1.def = 0;
          console.log(`%c${this.pokemon1.name} blocked the attack!`, gray);
        } else {
          this.pokemon2.attack(this.pokemon1);
        }
      }
      if (this.pokemon1.hp <= 0) {
        this.pokemon2.level = this.pokemon2.level + 1;
        this.pokemon2.fullhp = this.pokemon2.level * 20;
        console.log(
          `%c${this.pokemon1.name} fainted! ${this.pokemon2.name} wins and levels up to ${this.pokemon2.level}!`,
          smallred
        );

        return this.pokemon2;
      }
    }
  }
}
class Bracket {
  constructor(trainers) {
    this.trainers = trainers;
  }
  startBracket() {
    let red20 = "color:red; font-size:20px;";
    let red22 = "color:red; font-size:20px;";
    let green22 = "color:green; font-size:22px;";
    let numofpokemon = parseInt(
      prompt(
        "Please enter the number of pokemon per trainer? (Only numbers from 1-5)"
      ),
      10
    );
    if (numofpokemon > 5) {
      {
        console.log("Invalid input");
        throw new Error(
          "Please reload, the maximum number of Pokemon is up to 5 pokemons"
        );
      }
    } else if (
      numofpokemon == null ||
      numofpokemon == 0 ||
      numofpokemon == NaN ||
      numofpokemon < 0
    ) {
      console.log("Invalid input");
      throw new Error("Please reload, you need to input a valid number");
    }

    let alltrainers = this.trainers;

    let trainer1 = this.trainers[0];
    let trainer2 = this.trainers[1];
    let trainer3 = this.trainers[2];
    let trainer4 = this.trainers[3];
    if (this.trainers.length == 5) {
      let trainer5 = this.trainers[4];
      trainer1.qualify = "opening1";
      trainer2.qualify = "opening1";
      trainer3.qualify = "opening2";

      //playin
      console.log(`%cPlay-in Stage!`, red22);
      console.log(`%c${trainer4.name} vs ${trainer5.name}`, red20);
      let playinW = handleBattleCase(numofpokemon, trainer4, trainer5);

      if (playinW.trainer == trainer4.name) {
        trainer4.qualify = "opening2";
        trainer5.qualify = "elimination";
        console.warn(
          `${trainer4.name} proceeds to Opening Match 2, ${trainer5.name} drops to the Elimination Match!`
        );
      } else if (playinW.trainer == trainer5.name) {
        trainer5.qualify = "opening2";
        trainer4.qualify = "elimination";
        console.warn(
          `${trainer5.name} proceeds to Opening Match 2, ${trainer4.name} drops to the Elimination Match!`
        );
      }
      let z = 0;
      while (z < this.trainers.length) {
        let t = 0;
        let trainerheal = this.trainers[z];
        while (t < numofpokemon) {
          let pokemonheal1 = trainerheal.pokemons[t];

          pokemonheal1.heal2();

          t++;
        }
        z++;
      }
      console.log(`%cOpening Match 1!`, red22);
      console.log(`%c${trainer1.name} vs ${trainer2.name}`, red20);
      let openingW1 = handleBattleCase(numofpokemon, trainer1, trainer2);
      if (openingW1.trainer == trainer1.name) {
        trainer1.qualify = "rr";
        trainer2.qualify = "elimination";
        console.warn(
          `${trainer1.name} qualifies, ${trainer2.name} drops to Elimination Match!`
        );
      } else if (openingW1.trainer == trainer2.name) {
        trainer2.qualify = "rr";
        trainer1.qualify = "elimination";
        console.warn(
          `${trainer2.name} qualifies, ${trainer1.name} drops to Elimination Match!`
        );
      }
      let q = 0;
      while (q < this.trainers.length) {
        let w = 0;
        let trainerheal = this.trainers[q];
        while (w < numofpokemon) {
          let pokemonheal1 = trainerheal.pokemons[w];

          pokemonheal1.heal2();

          w++;
        }
        q++;
      }
      let t1o2 = alltrainers.map((x) => x.qualify).indexOf("opening2");
      let t2o2 = alltrainers.map((x) => x.qualify).lastIndexOf("opening2");
      let assigntrainer1 = this.trainers[t1o2];
      let assigntrainer2 = this.trainers[t2o2];
      console.log(`%cOpening Match 2!`, red22);
      console.log(`%c${assigntrainer1.name} vs ${assigntrainer2.name}`, red20);
      let openingW2 = handleBattleCase(
        numofpokemon,
        assigntrainer1,
        assigntrainer2
      );
      if (openingW2.trainer == assigntrainer1.name) {
        assigntrainer1.qualify = "rr";
        assigntrainer2.qualify = "decider";
        console.warn(
          `${assigntrainer1.name} qualifies, ${assigntrainer2.name} will wait for his opponent in the Decider Match!`
        );
      } else if (openingW2.trainer == assigntrainer2.name) {
        assigntrainer2.qualify = "rr";
        assigntrainer1.qualify = "decider";
        console.warn(
          `${assigntrainer2.name} qualifies, ${assigntrainer1.name} will wait for his opponent in the Decider Match!`
        );
      }
      let o = 0;
      while (o < this.trainers.length) {
        let p = 0;
        let trainerheal = this.trainers[o];
        while (p < numofpokemon) {
          let pokemonheal1 = trainerheal.pokemons[p];

          pokemonheal1.heal2();

          p++;
        }
        o++;
      }
      //elimination
      let t1e = alltrainers.map((x) => x.qualify).indexOf("elimination");
      let t2e = alltrainers.map((x) => x.qualify).lastIndexOf("elimination");
      let assigntrainerE1 = this.trainers[t1e];
      let assigntrainerE2 = this.trainers[t2e];
      console.log(`%cElimination Match!`, red22);
      console.log(
        `%c${assigntrainerE1.name} vs ${assigntrainerE2.name}`,
        red20
      );
      let eliminationW = handleBattleCase(
        numofpokemon,
        assigntrainerE1,
        assigntrainerE2
      );

      if (eliminationW.trainer == assigntrainerE1.name) {
        assigntrainerE1.qualify = "decider";
        assigntrainerE2.qualify = "eliminated";
        console.warn(
          `${assigntrainerE1.name} proceeds to the Decider Match, while ${assigntrainerE2.name} is eliminated`
        );
      } else if (eliminationW.trainer == assigntrainerE2.name) {
        assigntrainerE2.qualify = "decider";
        assigntrainerE1.qualify = "eliminated";
        console.warn(
          `${assigntrainerE2.name} proceeds to the Decider Match, while ${assigntrainerE1.name} is eliminated`
        );
      }
      let n = 0;
      while (n < this.trainers.length) {
        let m = 0;
        let trainerheal = this.trainers[n];
        while (m < numofpokemon) {
          let pokemonheal1 = trainerheal.pokemons[m];

          pokemonheal1.heal2();

          m++;
        }
        n++;
      }
      //decider
      let t1d = alltrainers.map((x) => x.qualify).indexOf("decider");
      let t2d = alltrainers.map((x) => x.qualify).lastIndexOf("decider");
      let assigntrainerD1 = this.trainers[t1d];
      let assigntrainerD2 = this.trainers[t2d];
      console.log(`%cDecider Match!`, red22);
      console.log(
        `%c${assigntrainerD1.name} vs ${assigntrainerD2.name}`,
        red20
      );
      let deciderW = handleBattleCase(
        numofpokemon,
        assigntrainerD1,
        assigntrainerD2
      );
      if (deciderW.trainer == assigntrainerD1.name) {
        assigntrainerD1.qualify = "rr";
        assigntrainerD2.qualify = "eliminated";
      } else if (deciderW.trainer == assigntrainerD2.name) {
        assigntrainerD2.qualify = "rr";
        assigntrainerD1.qualify = "eliminated";
      }
      let v = 0;
      while (v < this.trainers.length) {
        let b = 0;
        let trainerheal = this.trainers[v];
        while (b < numofpokemon) {
          let pokemonheal1 = trainerheal.pokemons[b];

          pokemonheal1.heal2();

          b++;
        }
        v++;
      }
    } else {
      console.log("%cOpening Match 1!", red22);
      console.log(`%c${trainer1.name} vs ${trainer2.name}`, red20);
      let openingBattle1 = handleBattleCase(numofpokemon, trainer1, trainer2);

      if (openingBattle1.trainer == trainer1.name) {
        trainer1.qualify = "rr";
        trainer2.qualify = "elimination";
        console.warn(
          `${trainer1.name} qualifies, ${trainer2.name} drops to Elimination Match!`
        );
      } else if (openingBattle1.trainer == trainer2.name) {
        trainer2.qualify = "rr";
        trainer1.qualify = "elimination";
        console.warn(
          `${trainer2.name} qualifies, ${trainer1.name} drops to Elimination Match!`
        );
      }

      let z = 0;
      while (z < this.trainers.length) {
        let t = 0;
        let trainerheal = this.trainers[z];
        while (t < numofpokemon) {
          let pokemonheal1 = trainerheal.pokemons[t];

          pokemonheal1.heal2();

          t++;
        }
        z++;
      }
      console.log("%cOpening Match 2!", red22);
      console.log(`%c${trainer3.name} vs ${trainer4.name}`, red20);
      let openingW2 = handleBattleCase(numofpokemon, trainer3, trainer4);

      //put loop here

      if (openingW2.trainer == trainer3.name) {
        trainer3.qualify = "rr";
        trainer4.qualify = "elimination";
        console.warn(
          `${trainer3.name} qualifies, ${trainer4.name} drops to Elimination Match!`
        );
      } else if (openingW2.trainer == trainer4.name) {
        trainer4.qualify = "rr";
        trainer3.qualify = "elimination";
        console.warn(
          `${trainer4.name} qualifies, ${trainer3.name} drops to Elimination Match!`
        );
      }
      let x = 0;
      while (x < this.trainers.length) {
        let y = 0;
        let trainerheal = this.trainers[x];

        while (y < numofpokemon) {
          let pokemonheal1 = trainerheal.pokemons[y];
          pokemonheal1.heal2();

          y++;
        }
        x++;
      }

      console.log("%cLosers Match!", red22);

      let t1e = alltrainers.map((x) => x.qualify).indexOf("elimination");
      let t2e = alltrainers.map((x) => x.qualify).lastIndexOf("elimination");

      let assigntrainerE1 = this.trainers[t1e];
      let assigntrainerE2 = this.trainers[t2e];
      console.log(
        `%c${assigntrainerE1.name} vs ${assigntrainerE2.name}`,
        red20
      );
      let eliminationW = handleBattleCase(
        numofpokemon,
        assigntrainerE1,
        assigntrainerE2
      );
      if (eliminationW.trainer == assigntrainerE1.name) {
        assigntrainerE1.qualify = "rr";
        assigntrainerE2.qualify = "eliminated";
        console.warn(
          `${assigntrainerE1.name} qualifies, ${assigntrainerE2.name} drops to Elimination Match!`
        );
      } else if (eliminationW.trainer == assigntrainerE2.name) {
        assigntrainerE2.qualify = "rr";
        assigntrainerE1.qualify = "eliminated";
        console.warn(
          `${assigntrainerE2.name} qualifies, ${assigntrainerE1.name} drops to Elimination Match!`
        );
      }
      let c = 0;
      while (c < this.trainers.length) {
        let u = 0;
        let trainerheal = this.trainers[c];
        while (u < numofpokemon) {
          let pokemonheal1 = trainerheal.pokemons[u];

          pokemonheal1.heal2();

          u++;
        }
        c++;
      }
    }
    let qualifiedArray = alltrainers.filter(
      (alltrainers) => alltrainers.qualify == "rr"
    );
    let saveQualified = [];
    for (let i = 0; i < qualifiedArray.length; i++) {
      let savingQuali = qualifiedArray[i].name;
      saveQualified.push(savingQuali);
    }
    console.log(
      `%c${saveQualified} qualifies to the round robin round!`,
      green22
    );
    let tournament = new Tournament(qualifiedArray, numofpokemon);
    tournament.startTournament();
  }
}
class Tournament {
  constructor(trainers, numofpokemon) {
    this.trainers = trainers;
    this.numofpokemon = numofpokemon;
  }

  startTournament() {
    let alltrainers = this.trainers;
    let bigred = "color:red; font-size:24px;";
    let numofpokemon = parseInt(this.numofpokemon);
    let red20 = "color:red; font-size:20px;";
    let win20 = "color:	#00113a; font-size:24px;";

    console.log(
      `%c${alltrainers[0].name}, ${alltrainers[1].name}, ${alltrainers[2].name} will be competing for the championship here in the round robin round!`,
      bigred
    );

    let trainer1 = this.trainers[0];
    let trainer2 = this.trainers[1];
    let trainer3 = this.trainers[2];
    console.log(alltrainers);
    console.log(`%c${trainer1.name} vs ${trainer2.name}`, red20);
    let rr1 = handleBattleCase(numofpokemon, trainer1, trainer2);

    if (rr1.trainer == trainer1.name) {
      trainer1.wins = trainer1.wins + 1;
    } else if (rr1.trainer == trainer2.name) {
      trainer2.wins = trainer2.wins + 1;
    }
    let x = 0;
    while (x < this.trainers.length) {
      let y = 0;
      let trainerheal = this.trainers[x];

      while (y < this.numofpokemon) {
        let pokemonheal1 = trainerheal.pokemons[y];
        pokemonheal1.heal2();

        y++;
      }
      x++;
    }
    console.log(`%c${trainer3.name} vs ${trainer1.name}`, red20);
    let rr2 = handleBattleCase(numofpokemon, trainer3, trainer1);

    if (rr2.trainer == trainer1.name) {
      trainer1.wins = trainer1.wins + 1;
    } else if (rr2.trainer == trainer3.name) {
      trainer3.wins = trainer3.wins + 1;
    }
    let q = 0;
    while (q < this.trainers.length) {
      let w = 0;
      let trainerheal = this.trainers[q];

      while (w < this.numofpokemon) {
        let pokemonheal1 = trainerheal.pokemons[w];
        pokemonheal1.heal2();

        w++;
      }
      q++;
    }
    console.log(`%c${trainer2.name} vs ${trainer3.name}`, red20);
    let rr3 = handleBattleCase(numofpokemon, trainer2, trainer3);

    if (rr3.trainer == trainer2.name) {
      trainer2.wins = trainer2.wins + 1;
    } else if (rr3.trainer == trainer3.name) {
      trainer3.wins = trainer3.wins + 1;
    }

    let winnerArray = alltrainers.filter(
      (alltrainers) => alltrainers.wins == 2
    );
    if (winnerArray[0] != null) {
      console.log(
        `%cThe winner of the tournament is ${winnerArray[0].name} with ${winnerArray[0].wins} wins`,
        win20
      );
    } else {
      console.log(
        `We have a tie with all trainers each having 1 win! To determine the winner, it will be the trainer with the fastest path to the championship which is the trainer with the lowest total lowest level of pokemon will win.`
      );

      let accumulatedLvl = [];
      for (let i = 0; i < this.trainers.length; i++) {
        let getTrainer = this.trainers[i].pokemons;
        let getLevel = [];
        for (let k = 0; k < 5; k++) {
          getLevel.push(getTrainer[k].level);
        }
        let resultLevel = getLevel.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue;
        });
        accumulatedLvl.push(resultLevel);
      }
      var min = Math.min.apply(Math, accumulatedLvl);
      let firstIndex = accumulatedLvl.indexOf(min);
      console.log(
        `%c${alltrainers[firstIndex].name} wins the tournament with him having the fastest path to the championship with only total accumulated level of ${min}`,
        win20
      );
    }
  }
}
//shuffles the final four opponents
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let numoftrainer = parseInt(
  prompt(
    "Please choose between number of trainers that you want in your bracket? (Only numbers 4 or 5)"
  ),
  10
);
let participants = [ash, gary, lance, blaine, wallace];
let shuffledTrainers = shuffle(participants);
if (numoftrainer == 4) {
  shuffledTrainers.pop();
  console.log(shuffledTrainers);
} else if (numoftrainer == 5) {
  console.log("Bracket will have 5 trainers");
} else if (numoftrainer == null) {
  console.log("Invalid input");
  throw new Error(
    "Please reload and and put either 4 or 5 for the number of trainers"
  );
} else {
  console.log("Invalid input");
  throw new Error(
    "Please reload and and put either 4 or 5 for the number of trainers"
  );
}
let tournament = new Bracket(shuffledTrainers);
tournament.startBracket();
