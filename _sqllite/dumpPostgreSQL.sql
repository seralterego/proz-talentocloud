--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2 (Debian 16.2-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: sales; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA sales;


--
-- Name: temp_tables; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA temp_tables;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: demo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.demo (
    id integer NOT NULL,
    name character varying(200) DEFAULT ''::character varying NOT NULL,
    hint text DEFAULT ''::text NOT NULL
);


--
-- Name: demo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.demo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: demo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.demo_id_seq OWNED BY public.demo.id;


--
-- Name: funnel; Type: TABLE; Schema: sales; Owner: -
--

CREATE TABLE sales.funnel (
    visit_id character varying NOT NULL,
    customer_id character varying NOT NULL,
    store_id character varying NOT NULL,
    product_id character varying NOT NULL,
    visit_page_date date,
    add_to_cart_date date,
    start_checkout_date date,
    finish_checkout_date date,
    paid_date date,
    discount numeric
);


--
-- Name: products; Type: TABLE; Schema: sales; Owner: -
--

CREATE TABLE sales.products (
    product_id character varying NOT NULL,
    brand character varying NOT NULL,
    model character varying NOT NULL,
    model_year character varying NOT NULL,
    price numeric NOT NULL
);


--
-- Name: stores; Type: TABLE; Schema: sales; Owner: -
--

CREATE TABLE sales.stores (
    store_name character varying NOT NULL,
    store_cnpj character varying NOT NULL,
    store_id character varying NOT NULL
);


--
-- Name: duplicados; Type: TABLE; Schema: temp_tables; Owner: -
--

CREATE TABLE temp_tables.duplicados (
    cpf character varying NOT NULL,
    name character varying NOT NULL,
    state character varying NOT NULL
);


--
-- Name: ibge_genders; Type: TABLE; Schema: temp_tables; Owner: -
--

CREATE TABLE temp_tables.ibge_genders (
    first_name character varying NOT NULL,
    gender character varying NOT NULL
);


--
-- Name: products_2; Type: TABLE; Schema: temp_tables; Owner: -
--

CREATE TABLE temp_tables.products_2 (
    product_id character varying NOT NULL,
    brand character varying NOT NULL,
    model character varying NOT NULL,
    model_year character varying NOT NULL,
    price numeric NOT NULL
);


--
-- Name: tabela_1; Type: TABLE; Schema: temp_tables; Owner: -
--

CREATE TABLE temp_tables.tabela_1 (
    cpf character varying NOT NULL,
    name character varying NOT NULL
);


--
-- Name: tabela_2; Type: TABLE; Schema: temp_tables; Owner: -
--

CREATE TABLE temp_tables.tabela_2 (
    cpf character varying NOT NULL,
    state character varying NOT NULL
);


--
-- Name: demo id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.demo ALTER COLUMN id SET DEFAULT nextval('public.demo_id_seq'::regclass);


--
-- Name: demo demo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.demo
    ADD CONSTRAINT demo_pkey PRIMARY KEY (id);


--
-- Name: funnel funnel_pkey; Type: CONSTRAINT; Schema: sales; Owner: -
--

ALTER TABLE ONLY sales.funnel
    ADD CONSTRAINT funnel_pkey PRIMARY KEY (visit_id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: sales; Owner: -
--

ALTER TABLE ONLY sales.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- Name: stores stores_pkey; Type: CONSTRAINT; Schema: sales; Owner: -
--

ALTER TABLE ONLY sales.stores
    ADD CONSTRAINT stores_pkey PRIMARY KEY (store_id);


--
-- Name: ibge_genders ibge_genders_pkey; Type: CONSTRAINT; Schema: temp_tables; Owner: -
--

ALTER TABLE ONLY temp_tables.ibge_genders
    ADD CONSTRAINT ibge_genders_pkey PRIMARY KEY (first_name);


--
-- Name: products_2 products_2_pkey; Type: CONSTRAINT; Schema: temp_tables; Owner: -
--

ALTER TABLE ONLY temp_tables.products_2
    ADD CONSTRAINT products_2_pkey PRIMARY KEY (product_id);


--
-- PostgreSQL database dump complete
--

