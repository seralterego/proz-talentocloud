-- Consultas: Select
-- • Filmes lançados em 1968
σ year = 1968 (movies)

-- • Filmes com ranking menor do que 5
-- σ rank < 5 (movies)

-- • Diretor com nome Stanley
-- σ first_name = 'Stanley' (directors)

-- • Atrizes do gênero feminino (‘F’)
-- σ gender = 'F' (actors)

-- • Atrizes do gênero feminino (‘F’) com nome ‘Anne’
-- σ gender = 'F' and first_name = 'Anne' (actors)

-- • Atores do gênero masculino (‘M’) com sobrenome ‘Campbell’
-- σ gender = 'M' and last_name = 'Campbell' (actors)
-- ••••••••••••••••••••••••••••••••••••••••••••••••••
-- ••••••••••••••••••••••••••••••••••••••••••••••••••
-- Exemplo professor Project
/* π last_name, first_name (directors)
π name, rank (σ rank > 8.5 (movies)) */
-- --------------------------------------------------
-- Consultas: Project
-- • ID e sobrenome dos diretores
-- π id, last_name (directors)

-- • Sobrenome e gênero dos atores
-- π last_name, gender (actors)

-- • Nome e ranking dos filmes anteriores ao ano de 1970
-- π name, rank (σ year < 1970 (movies))

-- • Nome e sobrenome das atrizes do gênero feminino
-- π first_name, last_name (σ gender = 'F' (actors))

-- • Nome e ano dos filmes com ranking maior ou igual do que 7.5
-- π name, year (σ rank <= 7.5 (movies))
-- ••••••••••••••••••••••••••••••••••••••••••••••••••
-- ••••••••••••••••••••••••••••••••••••••••••••••••••
-- Exemplo professor Operações matemáticas
/* π name, year
σ year = 1999 (movies)
∪
π name, year
σ year = 2006 (movies) */

-- --------------------------------------------------
-- Consultas: Operações matemáticas
-- • Filmes lançados no ano de 1981, e filmes com ranking de 8.7
/* π name, year (σ year = 1981 (movies))
∪
π name, year (σ rank = 8.7 (movies)) */

-- • Atores do gênero masculino e nome ‘William’, e atores do gênero masculino e sobrenome ‘Armstrong’
/* π first_name, last_name, gender (σ first_name = 'William' and gender = 'M' (actors))
∪
π first_name, last_name, gender (σ last_name = 'Armstrong' and gender = 'M' (actors)) */

-- • Atores do gênero masculino e sobrenome ‘Lloyd’, e atrizes de gênero feminino e nome ‘Emily’
/* π first_name, last_name, gender (σ gender = 'M' and last_name = 'Lloyd' (actors))
∪
π first_name, last_name, gender (σ gender = 'F' and first_name = 'Emily' (actors)) */

-- • Filmes com lançados antes do ano 1960 com ranking maior do que 8.5, e filmes lançados depois do ano 2000 com ranking menor do que 6
/* π name, year, rank (σ year < 1960 and rank > 8.5 (movies))
∪
π name, year, rank (σ year > 2000 and rank < 6 (movies)) */