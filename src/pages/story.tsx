export default function OurStory() {
  return (
    <>
      <div className="container">
        <div className="luc-image"></div>
        <h2>Our Story</h2>
        <div className="story">
          The old folks still whisper his name in the bayous, a ghost-story told
          around firelight and flickering gas lamps. Lucien LeRoux—born not from
          woman, but from the swamp itself. They say he crawled out of the black
          water one moonless night, his skin slick with mud, his lungs filled
          with the thick, humid breath of the cypress. Some claim he was cursed,
          others that he was chosen. Either way, he was never meant for an
          ordinary life. Lucien wandered into town barefoot, his hair tangled
          with Spanish moss, eyes gleaming like alligator gold. <br />
          <br /> The elders of St. Martin Parish tried to send him away, but he
          wouldn’t leave. He spent his days watching the riverboats, running his
          fingers along the ink-stained pages of old Creole newspapers, tracing
          the letters like they were magic sigils. One day, an old printmaker,
          Monsieur Boudreaux, found Lucien sketching strange, twisting designs
          in the dirt behind his shop. Snakes and saints, ghosts and gods, the
          very soul of the bayou spilling out of his hands. <br />
          <br />
          Boudreaux took him in, taught him how to carve woodblocks, how to
          press ink into paper. But Lucien did more than learn—he transformed.
          His prints pulsed with something ancient, something alive. The people
          who bought them swore they could hear the rustle of reeds, the croak
          of a bullfrog, the whisper of something waiting beneath the water. As
          the years passed, Lucien’s legend grew. Some said his prints had
          power—that if you looked too long, you might find yourself drawn into
          the bayou, never to return. Others believed he had ink in his veins
          instead of blood, that he would never die, only fade back into the
          cypress trees when his work was done. And maybe he did. <br />
          <br />
          One day, his workshop sat empty. No prints on the drying racks, no
          footprints in the mud. Just a single unfinished carving of a man,
          half-submerged in dark water, his eyes gleaming with the light of
          something old and unknowable. <br />
          <br />A century passed, and Lucien was all but a myth—just another
          ghost lost to the Louisiana mist. But then, in the summer of a
          heatwave so brutal it melted asphalt, he surfaced again—this time in
          New York City. No one knew where he’d been, how he hadn’t aged a day,
          or how he acquired a print shop in Bushwick, but there it was:
          Heatstroke Printshop, its windows sweating with condensation, its
          presses rolling like thunder in the night. <br />
          <br />
          The sign out front promised The Highest Quality Prints for the Lowest
          Prices, and true to his legend, Lucien delivered. His prints bore the
          same eerie, hypnotic detail as they had a hundred years ago, each one
          carrying the weight of something far older than ink and paper.
          Artists, poets, and wanderers drifted through his doors, drawn by
          something they couldn’t quite name, and when they left, they carried a
          piece of the bayou with them—pressed into cotton rag, stamped with the
          ghost of a man who had never truly left.
        </div>
      </div>

      {/*STYLESHEET*/}
      <style jsx>{`
      .story {
        text-align: justify;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 2rem;
      }

      h2 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
        text-decoration: underline;
      }
      
      .luc-image {
        background-image: url("https://i.ibb.co/WNMLt7km/lucienswamp.png");
        background-size: cover;
        background-position: center;
        height: 400px;
        width: 400px;
        margin: auto;
        margin-bottom: 2rem;
      }`}</style>
    </>
  );
}
