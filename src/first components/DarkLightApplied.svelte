<script>
  // import AppComponents from './first components/AppComponents.svelte';
  import ToggleMode from './components/ToggleMode.svelte';
  import storeData from './stores/lightDark';
  let darkMode;
  storeData.subscribe((value) => (darkMode = value));
</script>

<!-- <AppComponents /> -->
<div class="container-nonBS {darkMode ? 'go-dark' : 'go-light'}">
  <ToggleMode />
  <h1>Lorem ipsum dolor sit amet.</h1>
  <p class="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis sequi,
    sapiente architecto pariatur adipisci natus nemo quos nam porro dolorum
    eaque, dignissimos cumque explicabo debitis aliquam distinctio quod atque
    similique ducimus, fugiat iste repudiandae? Perferendis, accusamus ab,
    maxime quidem esse asperiores voluptatum, eum earum doloremque porro culpa
    ut iure nam aperiam quae necessitatibus vel voluptas inventore recusandae.
    Quisquam numquam dolorem molestias officia rerum harum aliquam at possimus
    corrupti ducimus omnis mollitia cupiditate et fugiat veritatis quasi
    consequuntur laudantium ullam voluptates hic rem, nesciunt officiis est?
    Nemo, soluta vero! Temporibus iusto quis facilis labore minus cupiditate
    itaque neque doloribus nesciunt harum consectetur quisquam dolorem quia
    distinctio adipisci dolorum tempore sequi illo, repudiandae mollitia
    tenetur! Molestiae dolorum suscipit, pariatur, accusamus voluptates atque
    officia neque quisquam impedit sit error autem voluptate laboriosam.
    Laudantium ab in, corporis aspernatur, fugiat eos voluptatibus ea maiores
    maxime facere repudiandae sed quia alias excepturi doloremque molestiae.
    Fuga ex dolores nostrum, ea saepe esse, natus cumque reiciendis iste sed
    architecto libero aliquid reprehenderit fugiat, asperiores et! Neque
    distinctio, a architecto porro, adipisci nisi commodi nostrum asperiores
    doloribus ex voluptatum! Ad nam, sequi quaerat natus assumenda est quidem
    temporibus. Distinctio, illum nobis quis beatae obcaecati esse voluptatibus.
    Repellendus, illo. Animi veniam officia odio ullam itaque sunt eum corrupti
    magnam totam sit eos vitae facere possimus voluptates molestiae laudantium
    veritatis ex repudiandae sint, alias quibusdam non tenetur minima!
    Voluptatem quis, illum molestias delectus temporibus eligendi ducimus
    doloribus officiis velit ipsam doloremque excepturi quo sequi vitae omnis
    qui dicta quasi, iusto nam, ipsa amet! Eius excepturi error temporibus
    obcaecati nesciunt dolorum architecto quibusdam at, nobis porro. Aliquam
    placeat, esse at ipsam rem nobis recusandae unde, dolor itaque eum libero?
    Maiores, modi dolor. Earum qui sapiente autem consectetur quas itaque animi
    exercitationem, modi dolorum consequuntur voluptate veniam fuga iure
    inventore. Qui ea nam maxime et beatae non, rem ex harum autem repudiandae,
    hic provident esse nobis fugiat eaque! Enim, voluptatibus neque. Vel ullam
    culpa architecto magni, provident porro dolor inventore facere quisquam hic,
    quas sint earum quo non officia veniam, voluptates nihil dolorem minima quis
    eveniet repudiandae beatae aut. Reiciendis temporibus rerum doloribus libero
    numquam veniam molestiae est perspiciatis voluptatem error, corporis cum
    distinctio maiores ea quas repellendus necessitatibus fugiat optio animi
    tempore, earum nisi adipisci? Odio perferendis aperiam eum sunt maxime culpa
    illum, aliquid tenetur quidem ab corrupti aliquam, quod accusantium. Culpa,
    ipsum eligendi facilis laborum provident rerum recusandae hic minima nobis
    ab error minus sapiente dolores unde amet! Numquam suscipit adipisci maxime.
    Excepturi eveniet, doloremque dolorum eos soluta voluptas. Tempora
    distinctio ipsa asperiores assumenda maxime. Commodi labore molestias
    inventore ut, quas eaque porro incidunt dignissimos explicabo cupiditate ab
    ipsa aliquam nostrum velit excepturi! Sit sint ipsa temporibus nemo
    perferendis, quasi at ex deleniti error ab distinctio maxime quibusdam nam
    atque a architecto voluptatem itaque! Qui minus, earum accusamus iusto vitae
    dolor numquam, tempora dolores iste ipsam unde exercitationem dolorem
    recusandae ducimus modi! Explicabo reiciendis autem sed voluptatem incidunt
    cum, animi unde libero consequatur ab necessitatibus? Facilis tenetur
    reiciendis temporibus rem.
  </p>
</div>

<style>
  h1 {
    text-align: center;
    padding: 1.5em 4em;
  }
  .container-nonBS {
    width: 100%;
    height: auto;
    min-height: 100vh;
  }
  .content {
    padding: 0.75em 5vw;
  }
</style>
