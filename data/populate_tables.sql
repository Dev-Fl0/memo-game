-- Active: 1689266936160@@127.0.0.1@5432@postgres@public
-- ----------------------------------------
-- Base de données :  "MemoGame"
-- ----------------------------------------
BEGIN;
-- ----------------------------------------
-- Déchargement des données de la table "card"
-- ----------------------------------------
INSERT INTO "card" ("name", "img_src") VALUES
('astronautes', 'astronautes.png'),
('charcuterie', 'charcuterie.png'),
('chat', 'chat.png'),
('computer', 'computer.png'),
('microphone', 'microphone.png'),
('poule', 'poule.png'),
('robot', 'robot.png'),
('shiba', 'shiba.png'),
('elephant', 'elephant.png'),
('cowboy', 'cowboy.png'),
('woman', 'woman.png'),
('cofee', 'cofee.png'),
('dog', 'dog.png'),
('panda', 'panda.png'),
('cocktail', 'cocktail.png'),
('wolf', 'wolf.png'),
('chateau', 'chateau.png'),
('maison', 'maison.png'),
('flammand', 'flammand.png'),
('JackRussel','JackRussel.png'),
('funko', 'funko.png'),
('gladiateur','gladiateur.png'),
('lion', 'lion.png'),
('voiture', 'voiture.png'),
('horloge', 'horloge.png'),
('colonnie', 'colonnie.png'),
('vaisseau', 'vaisseau.png'),
('volcan', 'volcan.png'),
('carotte', 'carotte.png'),
('planete', 'planete.png');

-- ----------------------------------------
-- Déchargement des données de la table "users"
-- ----------------------------------------
INSERT INTO "user" ("firstname", "lastname", "email", "password") VALUES
('Test', 'Test', 'Test@test.fr', '$2b$10$7vwYGrz2TGeyG4X8YnD9BOag9I.YKGUTJELs64qGmcK/syHu2BzTG'),
('Chuck', 'Norris', 'chuck@oclock.io', '$2b$10$bxAu/9kPBFPnWR6VA8S.WuZTDEkX0faDN/sIStBidbb4do53lllp.');

COMMIT;