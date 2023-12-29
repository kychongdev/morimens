import zhanjin from "../assets/boss/1.png";
import youwu from "../assets/boss/2.png";
export const bossData = [
  {
    id: 0,
    img: zhanjin,
    name: "竄行者 - 「詹金」",
    story: "她伸出鬼沒，對東區的每一個街巷都瞭若指掌，她就是「竄行者」.",
    skill: [
      {
        name: "「招式」集結鼠群",
        info: "造成X層虛弱, 獲得「鼠群之怒」:下回合每受到1攻擊會獲得X點力量. ",
        passive: [
          {
            info: "狀態：「鼠群的憤怒」每次受到傷害時獲得X點臨時力量, 回合開始時移除.",
          },
        ],
      },
      {
        name: "「招式」鼠群衝擊",
        info: "造成X次X傷害，自身獲得「破綻」:當回合內必定暴擊.",
        passive: [
          { info: "狀態：「破綻」受到的主動傷害必定暴擊，回合結束後移除." },
        ],
      },
      {
        name: "「招式」布朗出動！",
        info: "造成X點傷害,自身獲得X點力量",
      },
      {
        name: "「招式」脆弱打擊",
        info: "造成1次X傷害和X層脆弱",
      },
      {
        name: "「覺醒」空間折疊",
        info: "獲得1層瘋狂: 詹金每次造成未被格擋的傷害, 都會在隨機「指令卡」上留下永久傷痕.",
        passive: [
          { info: "狀態:「瘋狂」攻擊次數提高X" },
          { info: "玩家指令卡: 打出後受到X點傷害." },
        ],
      },
    ],
    question: [
      {
        title: "關於鼠群之怒",
        info: "只有直接造成傷害的指令卡才會觸發, 其他傷害例如「觸手」,「狂氣觸發的攻擊」都不會觸發此效果.",
        value: 0,
      },
      {
        title: "關於破綻",
        info: "破綻是在詹金身上，所以任何能暴擊的傷害打她必定會暴擊.",
        value: 1,
      },
    ],
  },
  {
    id: 1,
    img: youwu,
    name: "「猩紅」- 尤烏哈希",
    story: "自遙遠的群星而來, 現今世上最早的魔像.",
    skill: [
      {
        name: "「開場」血之狂暴",
        info: "發動2次，層次為【33%/66%】HP",
        passive: [
          {
            info: "每失去1點生命降低1層. 層次降低為0時, 將意圖轉換為高額傷害的狂氣爆發.",
          },
        ],
      },
      {
        name: "「招式」沸騰吧！血",
        info: "造成4次X點傷害",
      },
      {
        name: "「普通」攻擊",
        info: "造成X點傷害",
      },
      {
        name: "「招式」尖嘯吧！血",
        info: "獲得X點護盾，施加X層出血",
      },
      {
        name: "「招式」血怒連擊(破綻)",
        info: "造成9次X傷害. 每受到一次",
      },
      {
        name: "「派牌」",
        info: "「尖嘯吧！血」後發動, 玩家獲得「契約迴響」【3費】",
        passive: [
          {
            info: "將「猩紅」的一次行動意圖扭曲為低威脅的單次攻擊。 保留。幻影",
          },
        ],
      },
      {
        name: "「覺醒」血之狂。終結",
        info: "發動「血之狂暴」3次，層次為【10%/33%/33%】HP",
      },
    ],
    question: [],
  },
];
