# Rules

个人代理分流规则与配置。以 Surge 格式手动维护，由 GitHub Actions 自动转换并同步到 Clash、Quantumult X、Loon、Surfboard 和 sing-box。

---

## 目录结构

```
Rules/
├── Surge/
│   ├── RULE-SET/       ← 手动维护规则（唯一需要编辑的地方）
│   ├── Profile.conf    ← 手动维护主配置
│   ├── Module/         ← 模块（BlockAdsBase 手动维护，BlockAds 自动生成）
│   ├── Balloon.lcf     ← 自动生成（Loon）
│   └── Surfboard.conf  ← 自动生成
├── Clash/
│   ├── RuleSet/        ← 自动生成
│   └── Sample.yaml     ← 自动生成
├── Quantumult/
│   ├── Filter/         ← 自动生成
│   └── Sample.conf     ← 自动生成
└── sing-box/
    ├── source/         ← 自动生成（.json）
    └── *.srs           ← 自动生成（编译后二进制）
```

> 只需编辑 `Surge/RULE-SET/` 和 `Surge/Profile.conf`，其余文件由 Actions 自动生成。

---

## 主配置订阅

| 客户端 | 订阅地址 |
|--------|----------|
| Surge | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/Profile.conf` |
| Clash | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/Sample.yaml` |
| Quantumult X | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/Sample.conf` |
| Loon | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/Balloon.lcf` |
| Surfboard | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/Surfboard.conf` |

---

## Clash 覆写脚本

| 用途 | 地址 |
|------|------|
| mihomo 覆写脚本（Clash Verge / Mihomo Party 等） | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/Script/Script.js` |

> 该脚本用于客户端的「覆写脚本 / Script / Enhance Script」，不是 `rule-providers`，也不是 Surge 模块。

---

## 模块订阅

| 模块 | 订阅地址 |
|------|----------|
| BlockAds（合并去广告） | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/Module/BlockAds.sgmodule` |

---

## 规则集订阅

### Surge

| 规则 | 订阅地址 |
|------|----------|
| Britbox | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Britbox.list` |
| CBC & Gem | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/CBC_Gem.list` |
| Canal+ | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Canal%2B.list` |
| Crunchyroll | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Crunchyroll.list` |
| DAZN | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/DAZN.list` |
| Discovery+ | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Discovery%2B.list` |
| Disney+ | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Disney%2B.list` |
| Duolingo | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Duolingo.list` |
| F1 TV | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/F1_TV.list` |
| HBO GO | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/HBO_GO.list` |
| HBO Max | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/HBO_Max.list` |
| KKBOX | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/KKBOX.list` |
| MEGOGO | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/MEGOGO.list` |
| MUBI | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/MUBI.list` |
| Openclash | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Openclash.list` |
| Paramount+ | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Paramount%2B.list` |
| STARZ & STARZPLAY | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/STARZ%26STARZPLAY.list` |
| Setanta Sports | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Setantasports.list` |
| Sky CH | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/SkyCH.list` |
| SkyShowtime | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/SkyShowtime.list` |
| SkyShowtime+ | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/SkyShowtime%2B.list` |
| SSport Plus | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Ssportplus.list` |
| Star+ | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Star%2B.list` |
| Streaming AU | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/StreamingAU.list` |
| Streaming HK | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/StreamingHK.list` |
| Streaming JP | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/StreamingJP.list` |
| Streaming JP1 | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/StreamingJP1.list` |
| Streaming KR | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/StreamingKR.list` |
| Streaming KR1 | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/StreamingKR1.list` |
| Streaming TW | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/StreamingTW.list` |
| Streaming UK | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/StreamingUK.list` |
| Streaming US | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/StreamingUS.list` |
| Viu | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/Viu.list` |
| iLook.tv | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/ilook.tv.list` |
| OneFootball | `https://raw.githubusercontent.com/egwj/Rules/master/Surge/RULE-SET/onefootball.list` |

### Clash

| 规则 | 订阅地址 |
|------|----------|
| Britbox | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Britbox.yaml` |
| CBC & Gem | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/CBC_Gem.yaml` |
| Canal+ | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Canal%2B.yaml` |
| Crunchyroll | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Crunchyroll.yaml` |
| DAZN | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/DAZN.yaml` |
| Discovery+ | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Discovery%2B.yaml` |
| Disney+ | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Disney%2B.yaml` |
| Duolingo | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Duolingo.yaml` |
| F1 TV | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/F1_TV.yaml` |
| HBO GO | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/HBO_GO.yaml` |
| HBO Max | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/HBO_Max.yaml` |
| KKBOX | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/KKBOX.yaml` |
| MEGOGO | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/MEGOGO.yaml` |
| MUBI | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/MUBI.yaml` |
| Openclash | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Openclash.yaml` |
| Paramount+ | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Paramount%2B.yaml` |
| STARZ & STARZPLAY | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/STARZ%26STARZPLAY.yaml` |
| Setanta Sports | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Setantasports.yaml` |
| Sky CH | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/SkyCH.yaml` |
| SkyShowtime | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/SkyShowtime.yaml` |
| SkyShowtime+ | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/SkyShowtime%2B.yaml` |
| SSport Plus | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Ssportplus.yaml` |
| Star+ | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Star%2B.yaml` |
| Streaming AU | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/StreamingAU.yaml` |
| Streaming HK | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/StreamingHK.yaml` |
| Streaming JP | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/StreamingJP.yaml` |
| Streaming JP1 | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/StreamingJP1.yaml` |
| Streaming KR | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/StreamingKR.yaml` |
| Streaming KR1 | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/StreamingKR1.yaml` |
| Streaming TW | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/StreamingTW.yaml` |
| Streaming UK | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/StreamingUK.yaml` |
| Streaming US | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/StreamingUS.yaml` |
| Viu | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/Viu.yaml` |
| iLook.tv | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/ilook.tv.yaml` |
| OneFootball | `https://raw.githubusercontent.com/egwj/Rules/master/Clash/RuleSet/onefootball.yaml` |

### Quantumult X

| 规则 | 订阅地址 |
|------|----------|
| Britbox | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Britbox.list` |
| CBC & Gem | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/CBC_Gem.list` |
| Canal+ | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Canal%2B.list` |
| Crunchyroll | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Crunchyroll.list` |
| DAZN | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/DAZN.list` |
| Discovery+ | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Discovery%2B.list` |
| Disney+ | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Disney%2B.list` |
| Duolingo | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Duolingo.list` |
| F1 TV | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/F1_TV.list` |
| HBO GO | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/HBO_GO.list` |
| HBO Max | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/HBO_Max.list` |
| KKBOX | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/KKBOX.list` |
| MEGOGO | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/MEGOGO.list` |
| MUBI | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/MUBI.list` |
| Openclash | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Openclash.list` |
| Paramount+ | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Paramount%2B.list` |
| STARZ & STARZPLAY | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/STARZ%26STARZPLAY.list` |
| Setanta Sports | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Setantasports.list` |
| Sky CH | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/SkyCH.list` |
| SkyShowtime | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/SkyShowtime.list` |
| SkyShowtime+ | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/SkyShowtime%2B.list` |
| SSport Plus | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Ssportplus.list` |
| Star+ | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Star%2B.list` |
| Streaming AU | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/StreamingAU.list` |
| Streaming HK | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/StreamingHK.list` |
| Streaming JP | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/StreamingJP.list` |
| Streaming JP1 | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/StreamingJP1.list` |
| Streaming KR | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/StreamingKR.list` |
| Streaming KR1 | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/StreamingKR1.list` |
| Streaming TW | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/StreamingTW.list` |
| Streaming UK | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/StreamingUK.list` |
| Streaming US | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/StreamingUS.list` |
| Viu | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/Viu.list` |
| iLook.tv | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/ilook.tv.list` |
| OneFootball | `https://raw.githubusercontent.com/egwj/Rules/master/Quantumult/X/Filter/onefootball.list` |

### sing-box

填入 `route.rule_set`，推荐 `.srs` 二进制格式。Base URL：`https://raw.githubusercontent.com/egwj/Rules/master/sing-box/`，文件名与 `Surge/RULE-SET/` 一致。

```json
{
  "tag": "Disney+",
  "type": "remote",
  "format": "binary",
  "url": "https://raw.githubusercontent.com/egwj/Rules/master/sing-box/Disney%2B.srs"
}
```

---

## 自动同步说明

| Workflow | 触发条件 | 生成内容 |
|----------|----------|----------|
| Sync Rules | `Surge/RULE-SET/` 有改动，或每天 UTC 16:00 | `Clash/RuleSet/*.yaml`、`Quantumult/X/Filter/*.list`、`sing-box/` |
| Sync Config | `Surge/Profile.conf` 有改动 | `Clash/Sample.yaml`、`Quantumult/Sample.conf`、`Surge/Balloon.lcf`、`Surge/Surfboard.conf` |
| Sync Modules | `Surge/Module/` 有改动，或每天 UTC 16:00 | `Surge/Module/BlockAds.sgmodule` |
