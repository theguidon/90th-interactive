<template>
  <div id="content-wrapper">
    <section ref="animate-0">
      <div id="master" class="center">
        <!-- gdn intro -->
        <transition name="fade" mode="out-in">
          <div id="search" class="center" v-if="active <=3">
            <!-- logo -->
            <transition name="fade" mode="out-in">
              <div v-if="active === 2" class="logo-container center">
                <img id="tgdn" src="../assets/icons/02 90th Year Logo (BLUE).png" alt="tgdn" />
              </div>
            </transition>
            <!-- search tgdn -->
            <div class="search-box center">
              <div class="search-wrapper center">
                <div class="icon-container">
                  <div class="icon static-image"></div>
                </div>
                <transition name="fade">
                  <span v-if="active >= 2">THE GUIDON Online</span>
                </transition>
              </div>
            </div>
            <!-- credits -->
            <transition name="fade" mode="out-in">
              <div class="credits-container center" v-if="active === 2">
                <div class="creds-wrapper">
                  <div class="writers">
                    <span>
                      Written by:
                      <br />Jasey C. Cruz and Enrique B. Halili
                    </span>
                  </div>
                  <div class="dd">
                    <span>
                      Interactive by:
                      <br />Tria Gonzales and Miggy Pinaroc
                    </span>
                  </div>
                </div>
              </div>
            </transition>
            <!-- laptop no header -->
            <div id="laptop">
              <transition name="fade" mode="out-in">
                <div class="laptop-wrapper center" v-if="active === 3">
                  <img id="mac" src="../assets/background/laptop.png" alt="MACBOOK" />
                </div>
              </transition>
            </div>
          </div>
        </transition>
        <!-- laptop -->
        <transition name="fade" mode="out-in">
          <div id="laptop" v-if="active <=7">
            <!-- laptop w/ header -->
            <transition name="fade" mode="out-in">
              <div class="laptop-wrapper search-header center" v-if="active ===4">
                <img id="mac" src="../assets/background/search-laptop.png" alt="MACBOOK" />
              </div>
            </transition>
            <!-- laptop text -->
            <transition name="fade" mode="out-in">
              <div class="laptop-text center" v-if="active === 4">
                <p>
                  FOR 90 years, The GUIDON has committed itself to providing its
                  readers with accurate and engaging content, made accessible
                  through newsstands across the campus. After the publication
                  launched its online platforms in 2008, it has steadily begun to
                  delve into the world of digital journalism. Looking towards the
                  future, The GUIDON hopes to fully transition into an online
                  publication by its 100th year.
                </p>
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div class="laptop-text3 center" v-if="active === 5">
                <p>Currently, The GUIDON releases around 2,000 physical copies of its paper each month. While these issues are made available to readers before they are released online, much of the publication’s engagement comes from its digital platforms.</p>
              </div>
            </transition>
            <!-- newspaper bg -->
            <transition name="fade" mode="out-in">
              <div class="laptop-text2 center" v-if="active >= 6">
                <p class="white">
                  Currently, The GUIDON releases around
                  <b>2,000 physical copies</b> of its paper each month. While these issues are made available to readers before they are released online, much of the publication’s engagement comes from its digital platforms.
                </p>
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div class="newspaper-container" v-if="active >=6">
                <div id="newspapers">
                  <div class="layer"></div>
                </div>
              </div>
            </transition>
          </div>
        </transition>
        <!-- perks -->
        <transition name="fade" mode="out-in">
          <div id="perks" v-if="active <=11">
            <transition name="fade">
              <div class="perks-linear center" v-if="active >= 8 && active <=9">
                <!-- perks w mobile phone -->
                <transition name="fade" mode="out-in">
                  <div class="perks-container" v-if="active ===8">
                    <div class="perks-text">
                      <div class="perks-txt-wrapper">
                        <span>The perks of going digital</span>
                        <p>According to Editor-in-Chief Alithea C. Soriano, adjusting to the demands of its audience is one of the biggest factors pushing The GUIDON to produce more online multimedia content. She also stresses the importance of moving with the times when it comes to staying relevant to the lifestyle of the readers, especially with the rising demand for easily accessible news amidst the “boom of social media”.</p>
                      </div>
                    </div>
                    <div class="perks-digital">
                      <div id="tgdn-mobile"></div>
                    </div>
                  </div>
                </transition>
                <!-- EIC  -->
                <transition name="fade" mode="out-in">
                  <div class="eic-container" v-if="active === 9">
                    <div class="eic-text">
                      <div class="eic-txt-wrapper">
                        <p>"Publications in general really have to be aware of their target market, or target audience, their readers, their stakeholders. Why? Because writing your stories and the way you disseminate it, the effectiveness or the impact of that is determined by how well you know your readers’ habits."</p>
                        <span>Alithea C. Soriano, Editor-in-Chief</span>
                      </div>
                    </div>
                    <div class="eic-illus">
                      <div id="illustration"></div>
                    </div>
                  </div>
                </transition>
              </div>

              <!-- transition to pros and cons -->
              <div class="pc center" v-if="active >= 10 && active <=11">
                <transition name="fade" mode="out-in">
                  <div class="sm-container" v-if="active===10">
                    <div class="sm-txt-wrapper">
                      <p>The GUIDON’s Social Media managers Bryce Rubi and Deana Pagtalunan can attest to the potential of shifting to a fully online platform, serving as first-hand witnesses to just how far online content can reach. As those in charge of monitoring the publication’s social media accounts, they mention the high engagement numbers that posts regarding relevant topics can garner, reaching readers beyond the campus grounds. However, they also point out the unique aspects of print releases that would be left behind if ever this shift ever did occur.</p>
                      <p>In all, members of The GUIDON’s Editorial Board have found that taking the leap towards the all-digital format has a lot of advantages. Yet, the monumental task is not without its drawbacks.</p>
                    </div>
                  </div>
                </transition>
                <transition name="fade" mode="out-in">
                  <div class="pc-container" v-if="active===11">
                    <div class="pc-txt-wrapper">
                      <p>
                        According to our editors, these are the
                        <b>pros and cons</b> of fully shifting The GUIDON to an online platform:
                      </p>
                    </div>
                  </div>
                </transition>
              </div>
            </transition>
          </div>
        </transition>
        <!-- pros and cons -->
        <transition name="fade" mode="out-in">
          <div id="pros-cons">
            <transition name="fade" v-if="active>=12 && active <=21">
              <div class="pros center">
                <div class="pros-container">
                  <transition name="fade">
                    <div id="pros" class="center" v-if="active>=12 && active<=17">
                      <span>Pros</span>
                    </div>
                  </transition>

                  <transition name="fade">
                    <div id="cons" class="center" v-if="active>=18">
                      <span>Cons</span>
                    </div>
                  </transition>

                  <!-- content -->
                  <div class="pros-wrapper">
                    <transition name="fade">
                      <div class="pros-txt" v-if="active===12">
                        <div id="defend" class="gdn-img">
                          <div class="pc-txt center">
                            <span>Content can be released immediately.</span>
                          </div>
                          <div class="img-creds">
                            <span>Photo by Miguel Tarrosa</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>

                  <!-- articles -->
                  <div class="pros-wrapper">
                    <transition name="fade">
                      <div class="pros-txt" v-if="active===13">
                        <div id="rally" class="gdn-img">
                          <div class="pc-txt center">
                            <span>Articles remain timely and avoid becoming outdated.</span>
                          </div>
                          <div class="img-creds">
                            <span>Photo by Zach Garcia</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>

                  <!-- uaap -->
                  <div class="pros-wrapper">
                    <transition name="fade">
                      <div class="pros-txt" v-if="active===14">
                        <div id="uaap" class="gdn-img">
                          <div class="pc-txt center">
                            <span>Released content spreads faster.</span>
                          </div>
                          <div class="img-creds">
                            <span>Photo by Zoey Ignacio</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>

                  <!-- rally -->
                  <div class="pros-wrapper">
                    <transition name="fade">
                      <div class="pros-txt" v-if="active===15">
                        <div id="rally2" class="gdn-img">
                          <div class="pc-txt center">
                            <span>Distribution is more environmentally friendly.</span>
                          </div>
                          <div class="img-creds">
                            <span>Photo by Bruce Ong</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>

                  <!-- fr jett -->
                  <div class="pros-wrapper">
                    <transition name="fade">
                      <div class="pros-txt" v-if="active===16">
                        <div id="fr" class="gdn-img">
                          <div class="pc-txt center">
                            <span>More creativity and flexibility in terms of content that can be released.</span>
                          </div>
                          <div class="img-creds">
                            <span>Photo by Bruce Ong</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>

                  <!-- arms -->
                  <div class="pros-wrapper">
                    <transition name="fade">
                      <div class="pros-txt" v-if="active===17">
                        <div id="arms" class="gdn-img">
                          <div class="pc-txt center">
                            <span>Articles are more easily archived digitally.</span>
                          </div>
                          <div class="img-creds">
                            <span>Photo by Zach Garcia</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>

                  <!-- voice -->
                  <div class="cons-wrapper">
                    <transition name="fade">
                      <div class="cons-txt" v-if="active===18">
                        <div id="voice" class="gdn-img">
                          <div class="pc-txt center">
                            <span>Writers will not feel the gratification of seeing their names on printed newspapers.</span>
                          </div>
                          <div class="img-creds">
                            <span>Photo by Regine Salumbre</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>

                  <!-- owners -->
                  <div class="cons-wrapper">
                    <transition name="fade">
                      <div class="cons-txt" v-if="active===19">
                        <div id="owners" class="gdn-img">
                          <div class="pc-txt center">
                            <span>Readers lose the feeling of actually holding a newspaper in hand.</span>
                          </div>
                          <div class="img-creds">
                            <span>Photo by Jason Mariano</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>

                  <!-- embrace -->
                  <div class="cons-wrapper">
                    <transition name="fade">
                      <div class="cons-txt" v-if="active===20">
                        <div id="embrace" class="gdn-img">
                          <div class="pc-txt center">
                            <span>The tradition of releasing in print is forgone.</span>
                          </div>
                          <div class="img-creds">
                            <span>Photo by Bruce Ong</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>

                  <!-- tt -->
                  <div class="cons-wrapper">
                    <transition name="fade">
                      <div class="cons-txt" v-if="active===21">
                        <div id="tt" class="gdn-img">
                          <div class="pc-txt center">
                            <span>Online articles are not easily accessible for those without social media.</span>
                          </div>
                          <div class="img-creds">
                            <span>Photo by Zoey Ignacio</span>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </transition>
      </div>
    </section>

    <section ref="animate-1"></section>
    <section ref="animate-2"></section>
    <section ref="animate-3"></section>
    <section ref="animate-4"></section>
    <section ref="animate-5"></section>
    <section ref="animate-6"></section>
    <section ref="animate-7"></section>
    <section ref="animate-8"></section>
    <section ref="animate-9"></section>
    <section ref="animate-10"></section>
    <section ref="animate-11"></section>
    <section ref="animate-12"></section>
    <section ref="animate-13"></section>
    <section ref="animate-14"></section>
    <section ref="animate-15"></section>
    <section ref="animate-16"></section>
    <section ref="animate-17"></section>
    <section ref="animate-18"></section>
    <section ref="animate-19"></section>
    <section ref="animate-20"></section>
    <section ref="animate-21"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    // detect active on scroll
    scroll() {
      for (
        let i = 0;
        i < document.getElementsByTagName("section").length;
        i++
      ) {
        let el = this.$refs[`animate-${i}`];
        let rect = el.getBoundingClientRect();
        // eslint-disable-next-line no-console
        console.log(`${i} : ${rect.top}`);
        if (rect.top > 0) {
          this.active = i;
          break;
        }
      }

      // expand gdn online
      if (this.active >= 2) {
        document.querySelector(".search-box").style.width = "100%";
        document.querySelector(".search-box").style.background =
          "linear-gradient(90deg, #173359 0%, #2C4396 100%)";
      } else {
        document.querySelector(".search-box").removeAttribute("style");
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
    window.addEventListener("resize", this.scroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scroll);
    window.removeEventListener("resize", this.scroll);
  }
};
</script>

<style lang='scss' scoped>
#master {
  height: inherit;
}

// SEARCH
#search {
  // TGDN SEARCH
  .search-box {
    border-radius: 10px;
    transition: 0.75s ease all;
    position: fixed;
    z-index: 5;
    background: $navy;
    width: 10vw;
    height: 10vw;
    max-height: 130px;
    max-width: 800px;

    @media screen and (max-width: 991px) {
      width: 12vw;
      height: 12vw;
      max-width: 65vw;
    }

    @media screen and (max-width: 768px) {
      max-width: 70vw;
    }

    @media screen and (max-width: 575px) {
      width: 14vw;
      height: 14vw;
      max-width: 75vw;
    }

    .search-wrapper {
      width: 90%;
      .icon {
        height: 3.5em;
        width: 3.5em;
        display: block;
        background-image: url("../assets/icons/search.png");
        @media screen and (max-width: 768px) {
          height: 2.75em;
          width: 2.75em;
        }

        @media screen and (max-width: 575px) {
          height: 2em;
          width: 2em;
        }

        @media screen and (max-width: 375px) {
          height: 1.5em;
          width: 1.5em;
        }
      }

      span {
        color: white;
        white-space: nowrap;
        margin-left: 5%;
        display: inline-block;
        font-size: $font-size--5 * 3;
        transition: 0.75s ease all;

        @media screen and (max-width: 991px) {
          font-size: $font-size--5 * 2;
        }

        @media screen and (max-width: 768px) {
          $font-size: $font-size--5 * 1.2;
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--5;
        }
      }
    }
  }

  // LOGO
  .logo-container {
    height: 200px;
    width: 100%;
    position: fixed;
    transition: 0.5s all ease;
    top: 15%;
    @media screen and (max-width: 575px) {
      top: 20%;
    }
  }

  // CREDITS
  .credits-container {
    width: 100%;
    position: fixed;
    transition: 0.5s all ease;
    bottom: 10%;

    @media screen and (max-width: 991px) {
      bottom: 15%;
    }

    @media screen and (max-width: 768px) {
      bottom: 20%;
    }

    @media screen and (max-width: 575px) {
      bottom: 25%;
    }

    div {
      text-align: center;
      margin: 3% 0;

      span {
        color: $navy;
        font-size: $font-size--7;
        line-height: 1.2em;
        transition: 0.5s all ease;

        @media screen and (max-width: 768px) {
          font-size: $font-size--6;
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--4;
        }
      }
    }
  }
}

// LAPTOP
#laptop {
  position: fixed;
  width: 100%;
  height: 100%;

  .laptop-wrapper {
    width: 100%;
    height: 100%;

    img {
      width: 100vw;
      max-width: 1400px;
    }
  }

  .laptop-text {
    position: absolute;
    display: flex;
    z-index: 9;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) {
      top: 17.5%;
    }

    p {
      color: $navy;
      text-align: justify;
      font-size: $font-size--7;
      width: 70vw;
      max-width: 991px;

      @media screen and (max-width: 1199px) {
        font-size: $font-size--6;
      }

      @media screen and (max-width: 991px) {
        font-size: $font-size--5;
      }

      @media screen and (max-width: 768px) {
        width: 85vw;
      }
    }
  }

  .search-header {
    @media screen and (max-width: 768px) {
      bottom: 17.5%;
    }
  }

  .laptop-text2 {
    position: absolute;
    display: flex;
    z-index: 9;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;

    .white {
      color: $white;
    }

    p {
      color: $navy;
      text-align: justify;
      font-size: $font-size--7;
      width: 70vw;
      max-width: 991px;

      @media screen and (max-width: 1199px) {
        font-size: $font-size--6;
      }

      @media screen and (max-width: 991px) {
        font-size: $font-size--5;
      }

      @media screen and (max-width: 768px) {
        width: 85vw;
      }
    }
  }

  // text changes woop
  .laptop-text3 {
    position: absolute;
    display: flex;
    z-index: 9;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;

    p {
      color: $navy;
      text-align: justify;
      font-size: $font-size--7;
      width: 70vw;
      max-width: 991px;

      @media screen and (max-width: 1199px) {
        font-size: $font-size--6;
      }

      @media screen and (max-width: 991px) {
        font-size: $font-size--5;
      }

      @media screen and (max-width: 768px) {
        width: 85vw;
      }
    }
  }

  // NEWSPAPERS
  .newspaper-container {
    height: 100vh;
    width: 100vw;
    position: absolute;
    #newspapers {
      height: 100vh;
      background-image: url("../assets/background/Newspapers.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      .layer {
        width: 100%;
        height: 100%;
        background-color: rgba(23, 51, 89, 0.8);
      }
    }
  }
}

// DIGITAL PERKS
#perks {
  position: fixed;
  width: 100%;
  height: 100%;

  // apply gradient to screen
  .perks-linear {
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(44, 67, 150, 0.97) 0%,
      #173359 100%
    );
  }

  .perks-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    height: 100%;
    width: 85%;
    max-width: 1400px;
    margin: 0 auto;
    position: absolute;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .perks-text {
      width: 60vw;
      text-align: justify;
      color: $white;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      line-height: 3em;

      @media screen and (max-width: 1199px) {
        width: 50vw;
        line-height: 2em;
      }

      @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
      }

      @media screen and (max-width: 575px) {
        line-height: 1.5em;
      }

      span {
        font-weight: bold;
        font-size: $font-size--7;

        @media screen and (max-width: 1199px) {
          font-size: $font-size--6;
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--5;
        }
      }

      p {
        font-size: $font-size--7;
        @media screen and (max-width: 1199px) {
          font-size: $font-size--6;
        }
        @media screen and (max-width: 575px) {
          font-size: $font-size--5;
        }
      }
    }

    .perks-digital {
      width: 40vw;
      height: 100%;
      margin-left: 3%;

      @media screen and (max-width: 1199px) {
        width: 50vw;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
      }

      #tgdn-mobile {
        height: 100%;
        background-image: url("../assets/background/guidon.gif");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;
      }
    }
  }

  .eic-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    height: 100%;
    width: 85%;
    max-width: 1400px;
    margin: 0 auto;
    position: absolute;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .eic-text {
      width: 50vw;
      text-align: justify;
      color: $white;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      line-height: 3.5em;

      @media screen and (max-width: 1199px) {
        line-height: 3em;
      }

      @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
        line-height: 2.5em;
        align-items: center;
      }

      @media screen and (max-width: 575px) {
        line-height: 2em;
        align-items: flex-end;
      }

      span {
        font-weight: bold;
        font-style: italic;
        font-size: $font-size--7;

        @media screen and (max-width: 1199px) {
          font-size: $font-size--6;
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--5;
        }
      }

      p {
        font-size: $font-size--7;
        @media screen and (max-width: 1199px) {
          font-size: $font-size--6;
        }
        @media screen and (max-width: 575px) {
          font-size: $font-size--5;
        }
      }
    }

    .eic-illus {
      width: 50vw;
      height: 100%;
      margin-left: 3%;

      @media screen and (max-width: 1199px) {
      }

      @media screen and (max-width: 768px) {
        width: 75%;
        margin-left: 0;
        margin-bottom: 5%;
      }

      #illustration {
        height: 100%;
        background-image: url("../assets/background/Illustartion.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    }
  }

  // pros and cons
  .pc {
    width: 100%;
    height: 100%;
    .sm-container,
    .pc-container {
      position: absolute;
      width: 85%;
      max-width: 1400px;
    }

    .sm-txt-wrapper,
    .pc-txt-wrapper {
      height: inherit;
      p {
        font-size: $font-size--7;
        text-align: justify;
        color: $navy;
        line-height: 1.5em;

        @media screen and (max-width: 1199px) {
          font-size: $font-size--6;
        }
        @media screen and (max-width: 575px) {
          font-size: $font-size--5;
        }
      }
    }

    .pc-txt-wrapper {
      width: 60%;
      margin: 0 auto;
      p {
        text-align: center;
      }

      @media screen and (max-width: 575px) {
        width: 90%;
      }
    }
  }
}

// PROS & CONS
#pros-cons {
  position: fixed;
  width: 100%;
  height: 100%;

  .pros,
  .cons {
    height: 100%;
  }

  // wrappers
  .pros-wrapper,
  .cons-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
  }

  .pc-txt {
    height: 100%;
    width: 100%;
    position: absolute;
    span {
      font-size: $font-size--8;
      text-align: center;
      width: 95%;

      @media screen and (max-width: 1199px) {
        font-size: $font-size--7;
      }

      @media screen and (max-width: 991px) {
        font-size: $font-size--6;
      }

      @media screen and (max-width: 768px) {
        font-size: $font-size--7;
      }

      @media screen and (max-width: 575px) {
        font-size: $font-size--6;
      }

      @media screen and (max-width: 425px) {
        font-size: $font-size--5;
      }
    }
  }

  .img-creds {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    span {
      padding: 5%;
      color: $black-alpha;
      width: 200px;
      text-align: right;
      @media screen and (max-width: 575px) {
        font-size: $font-size--3;
      }
    }
  }

  .gdn-img {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .pros-container,
  .cons-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  // pros color gradient
  #pros {
    width: 50vw;
    height: 100%;
    background: linear-gradient(180deg, #3676b8 0%, #0f4073 100%);
    z-index: 9;
    position: absolute;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 40vh;
    }

    span {
      color: $white;
      font-size: $font-size--6 * 8;

      @media screen and (max-width: 768px) {
        font-size: $font-size--6 * 4;
      }
    }
  }

  // cons color gradient
  #cons {
    width: 50vw;
    height: 100%;
    background: linear-gradient(180deg, #94295c 0%, #51241f 100%);
    z-index: 9;
    position: absolute;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 40vh;
    }

    span {
      color: $white;
      font-size: $font-size--6 * 8;

      @media screen and (max-width: 768px) {
        font-size: $font-size--6 * 4;
      }
    }
  }

  // cons wrapper + images
  .cons-txt {
    width: 50vw;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 60vh;
    }

    #voice {
      background-image: url("../assets/background/cons/voice.png");
    }

    #owners {
      background-image: url("../assets/background/cons/owners.png");
    }

    #embrace {
      background-image: url("../assets/background/cons/embrace.png");
    }

    #tt {
      background-image: url("../assets/background/cons/tt.png");
    }
  }

  // pros wrapper + images
  .pros-txt {
    width: 50vw;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 60vh;
    }
    #defend {
      background-image: url("../assets/background/pros/defend.png");
    }

    #rally {
      background-image: url("../assets/background/pros/rally.png");
    }

    #uaap {
      background-image: url("../assets/background/pros/uaap.png");
    }

    #rally2 {
      background-image: url("../assets/background/pros/rally2.png");
    }

    #fr {
      background-image: url("../assets/background/pros/frjett.png");
    }

    #arms {
      background-image: url("../assets/background/pros/arms.png");
    }
  }
}
</style>