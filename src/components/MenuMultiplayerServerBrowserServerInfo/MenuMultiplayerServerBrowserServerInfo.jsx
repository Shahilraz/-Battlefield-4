import React from "react";
import { Back } from "../Back/Back";
import { BrowserBreadcrumb } from "../BrowserBreadcrumb/BrowserBreadcrumb";
import { BrowserSiButtons } from "../BrowserSiButtons/BrowserSiButtons";
import { BrowserSiRegionW } from "../BrowserSiRegionW/BrowserSiRegionW";
import { Invite } from "../Invite/Invite";
import { SideMenu } from "../SideMenu/SideMenu";
import { SideMenuMisc } from "../SideMenuMisc/SideMenuMisc";
import "./style.css";

export const MenuMultiplayer = ({
  sideMenuTypeStateClassName,
  sideMenuTypeStateClassNameOverride,
  sideMenuTypeBfStateClassName,
  sideMenuTypeBfStateClassNameOverride,
  inviteJoinClassName,
}) => {
  return (
    <div className="menu-multiplayer">
      <img className="menu-background" alt="Menu background" />

      <div className="menu-darker-BG" />

      <div className="side-menu">
        <div className="overlap">
          <div className="overlap-group-2">
            <img className="side-menu-line" alt="Side menu line" />

            <div className="side-menu-misc-2">
              <SideMenuMisc
                className="design-component-instance-node"
                state="default"
                type="side-menu-help-wrapper"
              />
              <SideMenuMisc
                className="side-menu-misc-instance"
                state="default"
                type="side-menu-quit-wrapper"
              />
            </div>
          </div>

          <div className="side-menu-games">
            <SideMenu
              state="default"
              type="bf1"
              typeStateClassName={sideMenuTypeStateClassName}
            />
            <SideMenu
              state="current"
              type="bf4"
              typeStateClassName="side-menu-instance"
            />
            <SideMenu
              state="default"
              type="bf5"
              typeStateClassName={sideMenuTypeStateClassNameOverride}
            />
            <SideMenu
              state="default"
              type="BH"
              typeStateClassName={sideMenuTypeBfStateClassName}
            />
          </div>

          <div className="side-menu-other">
            <SideMenu
              state="default"
              type="news"
              typeStateClassName="side-menu-2"
            />
            <SideMenu
              state="default"
              type="watch"
              typeStateClassName="side-menu-3"
            />
            <SideMenu
              state="default"
              type="career"
              typeStateClassName={sideMenuTypeBfStateClassNameOverride}
            />
          </div>
        </div>
      </div>

      <Invite
        className="invite-instance"
        joinClassName={inviteJoinClassName}
        menuType="d-off-on"
      />
      <div className="browser-SI-next-w">
        <div className="browser-SI-next">
          <div className="overlap-2">
            <div className="browser-SI-next-bg" />

            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <img className="img" alt="Browser SI next" />

                <div className="browser-SI-next-2" />
              </div>
            </div>

            <div className="browser-SI-next-info">
              <div className="text-wrapper-2">DAWNBREAKER</div>

              <div className="conquest-large">CONQUEST LARGE</div>
            </div>
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="browser-SI-next-bg" />

            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <img className="img" alt="Browser SI next" />

                <div className="browser-SI-next-2" />
              </div>
            </div>

            <div className="browser-SI-next-info">
              <div className="text-wrapper-2">PROPAGANDA</div>

              <div className="conquest-large">CONQUEST LARGE</div>
            </div>
          </div>
        </div>

        <div className="div-wrapper">
          <div className="overlap-2">
            <div className="browser-SI-next-bg" />

            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <img className="img" alt="Browser SI next" />

                <div className="browser-SI-next-2" />
              </div>
            </div>

            <div className="browser-SI-next-info">
              <div className="text-wrapper-2">OPERATION LOCKER</div>

              <div className="conquest-large">CONQUEST LARGE</div>
            </div>
          </div>
        </div>

        <div className="browser-SI-next-3">
          <div className="overlap-2">
            <div className="browser-SI-next-bg" />

            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <img className="img" alt="Browser SI next" />

                <div className="browser-SI-next-2" />
              </div>
            </div>

            <div className="browser-SI-next-info">
              <div className="text-wrapper-2">LANCANG DAM</div>

              <div className="conquest-large">CONQUEST LARGE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-rotation">MAP ROTATION</div>

      <div className="rectangle-4" />

      <div className="browser-SI-settings">
        <div className="browser-SI-rules">
          <div className="text-wrapper-3">RULES</div>

          <div className="div-3">
            <div className="div-4">
              <div className="text-wrapper-4">TICKETS</div>

              <div className="text-wrapper-5">400</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-5">
            <div className="div-4">
              <div className="text-wrapper-4">VEHICLE SPAWN DELAY</div>

              <div className="text-wrapper-6">25</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-6">
            <div className="div-4">
              <div className="text-wrapper-4">BULLET DAMAGE</div>

              <div className="text-wrapper-7">100</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-7">
            <div className="div-4">
              <div className="text-wrapper-4">KICK AFTER TEAM KILLS</div>

              <div className="text-wrapper-8">5</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-8">
            <div className="div-4">
              <div className="text-wrapper-4">PLAYER HEALTH</div>

              <div className="text-wrapper-7">100</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-9">
            <div className="div-4">
              <div className="text-wrapper-4">PLAYER RESPAWN TIME</div>

              <div className="text-wrapper-7">100</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-10">
            <div className="div-4">
              <div className="text-wrapper-4">KICK AFTER IDLE</div>

              <div className="text-wrapper-9">300</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-11">
            <div className="div-4">
              <div className="text-wrapper-4">BAN AFTER KICKS</div>

              <div className="text-wrapper-8">3</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>
        </div>

        <div className="browser-SI-advanced">
          <div className="text-wrapper-3">ADVANCED</div>

          <div className="div-3">
            <div className="div-4">
              <div className="text-wrapper-4">MINIMAP</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-5">
            <div className="div-4">
              <div className="text-wrapper-4">ONLY SQUAD LEADER SPAWN</div>

              <div className="off">OFF</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-6">
            <div className="div-4">
              <div className="text-wrapper-4">VEHICLES</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-7">
            <div className="div-4">
              <div className="text-wrapper-4">TEAM BALANCE</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-8">
            <div className="div-4">
              <div className="text-wrapper-4">MINIMAP SPOTTING</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-9">
            <div className="div-4">
              <div className="text-wrapper-4">HUD</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-10">
            <div className="div-4">
              <div className="text-wrapper-4">3P VEHICLE CAM</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-11">
            <div className="div-4">
              <div className="text-wrapper-4">REGENERATIVE HEALTH</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="browser-SI-killcam-w">
            <div className="div-4">
              <div className="text-wrapper-4">KILL CAM</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="browser-SI-friendly">
            <div className="div-4">
              <div className="text-wrapper-4">FRIENDLY FIRE</div>

              <div className="off">OFF</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="browser-SI-spotting">
            <div className="div-4">
              <div className="text-wrapper-4">3D SPOTTING</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="browser-SI-enemy-w">
            <div className="div-4">
              <div className="text-wrapper-4">ENEMY NAME TAGS</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>
        </div>

        <div className="browser-SI-settings-2">
          <div className="text-wrapper-3">SETTINGS</div>

          <BrowserSiRegionW
            className="browser-SI-region-w-instance"
            state="default"
          />
          <div className="div-5">
            <div className="div-4">
              <div className="text-wrapper-4">PUNKBUSTER</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-6">
            <div className="div-4">
              <div className="text-wrapper-4">FAIRFIGHT</div>

              <div className="on">ON</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-7">
            <div className="div-4">
              <div className="text-wrapper-4">PASSWORD</div>

              <div className="off">OFF</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>

          <div className="div-8">
            <div className="div-4">
              <div className="text-wrapper-4">PRESET</div>

              <div className="normal">NORMAL</div>
            </div>

            <img className="line-2" alt="Line" />
          </div>
        </div>
      </div>

      <div className="browser-SI-current">
        <div className="browser-SI-tickrate">
          <div className="overlap-group-4">
            <div className="text-wrapper-10">60 Hz</div>

            <div className="text-wrapper-11">TICKRATE</div>
          </div>
        </div>

        <div className="browser-SI-ping">
          <div className="overlap-3">
            <div className="text-wrapper-10">47ms</div>

            <div className="text-wrapper-11">PING</div>
          </div>
        </div>

        <div className="browser-SI-players">
          <div className="overlap-4">
            <div className="text-wrapper-10">64/64</div>

            <div className="text-wrapper-11">PLAYERS</div>
          </div>
        </div>
      </div>

      <div className="browser-SI-buttons-2">
        <BrowserSiButtons
          className="design-component-instance-node"
          state="default"
          type="browser-SI-join"
        />
        <BrowserSiButtons
          className="browser-SI-buttons-instance"
          state="default"
          type="browser-SI-spectate"
        />
        <BrowserSiButtons
          className="browser-SI-buttons-3"
          state="default"
          type="browser-SI-commander"
        />
        <BrowserSiButtons
          className="browser-SI-buttons-4"
          state="default"
          type="browser-SI-favorite"
        />
      </div>

      <div className="browser-SI-intro">
        <p className="server-protected-by">
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
          Request, Appeal, Visit us: www.epg.gg | Discord
          <br />
          https://discord.gg/3r5NK4d
        </p>

        <div className="browser-SI-info">
          <p className="conquest-large-siege">
            CONQUEST LARGE - SIEGE OF SHANGHAI - NORMAL - 40 HZ
          </p>

          <div className="germany-flag">
            <img className="line-3" alt="Line" />

            <img className="line-4" alt="Line" />

            <img className="line-5" alt="Line" />
          </div>
        </div>

        <p className="p">#1| NASA | Noobs Welcome | Conquest 40Hz</p>
      </div>

      <div className="browser-breadcrumb-2">
        <div className="overlap-5">
          <div className="server-info">SERVER INFO</div>

          <div className="browser-breadcrumb-3">
            <BrowserBreadcrumb
              className="browser-breadcrumb-previous"
              state="default"
            />
            <div className="server-browser">SERVER BROWSER</div>

            <div className="text-wrapper-12">/</div>

            <div className="text-wrapper-13">/</div>

            <Back className="back-instance" state="default" />
          </div>
        </div>
      </div>
    </div>
  );
};
