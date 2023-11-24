import "./Ruling.scss";

function Ruling() {
  return (
    <div className="ruling-container">
      <div className="ruling-title">
        <h1>Règles</h1>
      </div>
      <div className="ruling-inscription">
        <h2>1. Inscription</h2>
        <p>Chaque participant s'inscrit sur le site en indiquant son nom.</p>
        <p>
          Le nombre de joueurs et le nombre de cycles (tours) sont définis lors
          de la création de la partie.
        </p>
      </div>

      <div className="ruling-attribution">
        <h2>2. Attribution des rôles</h2>
        <p>Chaque joueur est ajouté à la liste dans l'ordre d'inscription.</p>
        <p>
          Une roue est utilisée pour déterminer la catégorie de questions pour
          chaque début de cycle.
        </p>
      </div>

      <div className="ruling-cycle">
        <h2>3. Déroulement d'un cycle</h2>
        <p>
          Chaque joueur, dans l'ordre établi, répond à une question de la
          catégorie déterminée par la roue.
        </p>
        <p>
          Vous avez 6 catégories différentes : Art et littérature, TV et cinéma,
          Sport, Musique, Culture générale et Actualité et politique.
        </p>
        <p>
          Les réponses correctes sont récompensées par des points, et la
          rapidité est également prise en compte pour stimuler la compétitivité.
        </p>
        <p>
          Chaque question doit être répondue dans un délai maximum de 30
          secondes.
        </p>
      </div>

      <div className="ruling-categories">
        <h2>4. Rotation des catégories</h2>
        <p>
          Après que chaque joueur ait répondu à une question, la roue est
          relancée pour déterminer la nouvelle catégorie de questions pour le
          tour suivant.
        </p>
        <p>
          Le processus se répète jusqu'à ce que tous les joueurs aient répondu à
          une question pour chaque catégorie définie au début du jeu.
        </p>
      </div>

      <div className="ruling-fin">
        <h2>5. Fin du cycle</h2>
        <p>
          Une fois que tous les cycles ont été complétés, le classement est
          établi en fonction du nombre total de points accumulés par chaque
          joueur.
        </p>
        <p>
          Le joueur avec le plus grand nombre de points choisit son cadeau en
          premier, suivi par le deuxième meilleur score, et ainsi de suite.
        </p>
      </div>

      <div className="ruling-cadeaux">
        <h2>6. Sélection des cadeaux</h2>
        <p>
          Les cadeaux doivent être apportés par chaque participant avant le
          début du jeu.
        </p>
        <p>
          Les joueurs choisissent leur cadeau dans l'ordre déterminé par le
          classement final.
        </p>
      </div>
    </div>
  );
}

export default Ruling;
