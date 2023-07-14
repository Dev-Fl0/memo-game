-- Active: 1689266936160@@127.0.0.1@5432@postgres@public
BEGIN;

-- /!\ DROP TABLE ==> A supprimer avant de lancer en production /!\
DROP TABLE IF EXISTS "card",
"user";

-- -----------------------------------------------------
-- Table "card"
-- -----------------------------------------------------
CREATE TABLE "card"(  
    "id" INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'Europe/Paris'),
    "updated_at" timestamptz,
    "name" VARCHAR(255) NOT NULL,
    "img_src" VARCHAR(255) NOT NULL
);
-- -----------------------------------------------------
-- Table "app_user"
-- -----------------------------------------------------
CREATE TABLE "user" (
    "id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" text NOT NULL,
    "firstname" text NULL,
    "lastname" text NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz,
    "role" TEXT NOT NULL DEFAULT 'member'
);
COMMENT ON TABLE "card" IS 'This table contains card information';
COMMENT ON TABLE "user" IS 'This table contains the information of registered users of the website';

COMMIT; -- Pour mettre fin à au bloc de transaction et l'exécuter