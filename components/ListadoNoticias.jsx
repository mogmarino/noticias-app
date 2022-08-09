import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
  console.log(noticias);
  const totalPaginas = Math.ceil(totalNoticias / 20);
  console.log(totalPaginas);
  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Ultimas Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia key={noticias.url} noticia={noticia} />
        ))}
      </Grid>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        sc={{
          marginY: 5,
        }}
      >
        <Pagination
          page={pagina}
          count={totalPaginas}
          color="primary"
          onChange={handleChangePagina}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
