(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [340],
  {
    1360: function (n, a, e) {
      var t = { "./terms_of_service_jp.md": [1323, 323] };
      function o(n) {
        if (!e.o(t, n))
          return Promise.resolve().then(function () {
            var a = new Error("Cannot find module '" + n + "'");
            throw ((a.code = "MODULE_NOT_FOUND"), a);
          });
        var a = t[n],
          o = a[0];
        return e.e(a[1]).then(function () {
          return e(o);
        });
      }
      (o.keys = function () {
        return Object.keys(t);
      }),
        (o.id = 1360),
        (n.exports = o);
    },
    3708: function (n, a, e) {
      var t = { "./help_en.yaml": [3238, 238], "./help_ja.yaml": [6443, 443] };
      function o(n) {
        if (!e.o(t, n))
          return Promise.resolve().then(function () {
            var a = new Error("Cannot find module '" + n + "'");
            throw ((a.code = "MODULE_NOT_FOUND"), a);
          });
        var a = t[n],
          o = a[0];
        return e.e(a[1]).then(function () {
          return e.t(o, 19);
        });
      }
      (o.keys = function () {
        return Object.keys(t);
      }),
        (o.id = 3708),
        (n.exports = o);
    },
    9488: function (n, a, e) {
      var t = {
        "./news_en.yaml": [2991, 991],
        "./news_ja.yaml": [7573, 573],
        "./news_ko.yaml": [25, 25],
      };
      function o(n) {
        if (!e.o(t, n))
          return Promise.resolve().then(function () {
            var a = new Error("Cannot find module '" + n + "'");
            throw ((a.code = "MODULE_NOT_FOUND"), a);
          });
        var a = t[n],
          o = a[0];
        return e.e(a[1]).then(function () {
          return e.t(o, 19);
        });
      }
      (o.keys = function () {
        return Object.keys(t);
      }),
        (o.id = 9488),
        (n.exports = o);
    },
    8340: function (n, a, e) {
      "use strict";
      e.r(a),
        e.d(a, {
          default: function () {
            return ha;
          },
        });
      var t = e(7294),
        o = e(9008),
        r = e(6835),
        i = e(2804),
        s = e(4855),
        h = e(2231),
        l = function () {
          var n = i.sJ(s.MK),
            a = t.useState(0),
            e = (0, r.Z)(a, 2),
            o = e[0],
            l = e[1],
            c = (0, h.iM)(),
            u = function () {
              l(window.innerHeight);
            };
          return (
            t.useEffect(function () {
              return (
                window.addEventListener("resize", u),
                u(),
                function () {
                  window.removeEventListener("resize", u);
                }
              );
            }, []),
            { coverAnimationEnd: n, height: o, font: c }
          );
        },
        c = e(7258),
        u = e(1286),
        m = e(29),
        d = e(9499),
        f = e(7794),
        g = e.n(f),
        k = e(789),
        _ = e(8006),
        z = e(5871),
        p = function (n) {
          try {
            var a = window[n],
              e = "__storage_available_test__";
            return a.setItem(e, e), a.removeItem(e), !0;
          } catch (t) {
            return !1;
          }
        },
        y = JSON.parse(
          '[{"name":{"first_name":{"ja":"\u30ce\u30ce\u30df","en":"Nonomi","ko":"\ub178\ub178\ubbf8","zh-hant":"\u91ce\u4e43\u7f8e","zh-hans":"\u91ce\u4e43\u7f8e"},"last_name":{"ja":"\u5341\u516d\u591c","en":"Izayoi","ko":"\uc774\uc790\uc694\uc774","zh-hant":"\u5341\u516d\u591c","zh-hans":"\u5341\u516d\u591c"}},"school":"abydos","club":["countermeasures_council","masked_swimsuit_group"],"id":"Nonomi","img":["Nonomi","Nonomi_Robber","Nonomi_Swimsuit","Nonomi_Robber_Swimsuit"]},{"name":{"first_name":{"ja":"\u30bb\u30ea\u30ab","en":"Serika","ko":"\uc138\ub9ac\uce74","zh-hant":"\u831c\u9999","zh-hans":"\u831c\u9999"},"last_name":{"ja":"\u9ed2\u898b","en":"Kuromi","ko":"\ucfe0\ub85c\ubbf8","zh-hant":"\u9ed1\u898b","zh-hans":"\u9ed1\u89c1"}},"school":"abydos","club":["countermeasures_council","masked_swimsuit_group","sibaseki_ramen"],"id":"Serika","img":["Serika","Serika_Robber","Serika_Shibaseki","Serika_Newyear","Serika_Swimsuit","Serika_Robber_Swimsuit"]},{"name":{"first_name":{"ja":"\u30a2\u30e4\u30cd","en":"Ayane","ko":"\uc544\uc57c\ub124","zh-hant":"\u7dbe\u97f3","zh-hans":"\u7eeb\u97f3"},"last_name":{"ja":"\u5965\u7a7a","en":"Okusora","ko":"\uc624\ucfe0\uc18c\ub77c","zh-hant":"\u5967\u7a7a","zh-hans":"\u5965\u7a7a"}},"school":"abydos","club":["countermeasures_council","masked_swimsuit_group"],"id":"Ayane","img":["Ayane","Ayane_Robber","Ayane_Swimsuit","Ayane_Robber_Swimsuit"]},{"name":{"first_name":{"ja":"\u30b7\u30ed\u30b3","en":"Shiroko","ko":"\uc2dc\ub85c\ucf54","zh-hant":"\u767d\u5b50","zh-hans":"\u767d\u5b50"},"last_name":{"ja":"\u7802\u72fc","en":"Sunaookami","ko":"\uc2a4\ub098\uc624\uc624\uce74\ubbf8","zh-hant":"\u7802\u72fc","zh-hans":"\u7802\u72fc"}},"school":"abydos","club":["countermeasures_council","masked_swimsuit_group"],"id":"Shiroko","img":["Shiroko","Shiroko_Robber","Shiroko_Ridingsuit","Shiroko_Swimsuit","Shiroko_Robber_Swimsuit"]},{"name":{"first_name":{"ja":"\u30db\u30b7\u30ce","en":"Hoshino","ko":"\ud638\uc2dc\ub178","zh-hant":"\u661f\u91ce","zh-hans":"\u661f\u91ce"},"last_name":{"ja":"\u5c0f\u9ce5\u904a","en":"Takanashi","ko":"\ud0c0\uce74\ub098\uc2dc","zh-hant":"\u5c0f\u9ce5\u6e38","zh-hans":"\u5c0f\u9e1f\u6e38"}},"school":"abydos","club":["countermeasures_council","masked_swimsuit_group"],"id":"Hoshino","img":["Hoshino","Hoshino_Robber","Hoshino_Swimsuit","Hoshino_Robber_Swimsuit"]},{"name":{"first_name":{"ja":"\u30d5\u30a6\u30ab","en":"Fuuka","ko":"\ud6c4\uc6b0\uce74","zh-hant":"\u98a8\u83ef","zh-hans":"\u98ce\u534e"},"last_name":{"ja":"\u611b\u6e05","en":"Aikiyo","ko":"\uc544\uc774\ud0a4\uc694","zh-hant":"\u611b\u6e05","zh-hans":"\u7231\u6e05"}},"school":"gehenna","club":["school_lunch_club"],"id":"Fuuka","img":["Fuuka"]},{"name":{"first_name":{"ja":"\u30b8\u30e5\u30f3\u30b3","en":"Junko","ko":"\uc900\ucf54","zh-hant":"\u6df3\u5b50","zh-hans":"\u6df3\u5b50"},"last_name":{"ja":"\u8d64\u53f8","en":"Akashi","ko":"\uc544\uce74\uc2dc","zh-hant":"\u8d64\u53f8","zh-hans":"\u8d64\u53f8"}},"school":"gehenna","club":["gourmet_research_society"],"id":"Junko","img":["Junko"]},{"name":{"first_name":{"ja":"\u30e0\u30c4\u30ad","en":"Mutsuki","ko":"\ubb34\uce20\ud0a4","zh-hant":"\u7121\u6708","zh-hans":"\u65e0\u6708"},"last_name":{"ja":"\u6d45\u9ec4","en":"Asagi","ko":"\uc544\uc0ac\uae30","zh-hant":"\u6d45\u9ec3","zh-hans":"\u6d45\u9ec4"}},"school":"gehenna","club":["problem_solver_68"],"id":"Mutsuki","img":["Mutsuki","Mutsuki_Newyear"]},{"name":{"first_name":{"ja":"\u30c1\u30ca\u30c4","en":"Chinatsu","ko":"\uce58\ub098\uce20","zh-hant":"\u5343\u590f","zh-hans":"\u5343\u590f"},"last_name":{"ja":"\u706b\u5bae","en":"Hinomiya","ko":"\ud788\ub178\ubbf8\uc57c","zh-hant":"\u706b\u5bae","zh-hans":"\u706b\u5bab"}},"school":"gehenna","club":["disciplinary_committee"],"id":"Chinatsu","img":["Chinatsu","Chinatsu_Hotspring"]},{"name":{"first_name":{"ja":"\u30cf\u30eb\u30ab","en":"Haruka","ko":"\ud558\ub8e8\uce74","zh-hant":"\u9059\u9999","zh-hans":"\u9065\u9999"},"last_name":{"ja":"\u4f0a\u8349","en":"Igusa","ko":"\uc774\uad6c\uc0ac","zh-hant":"\u4f0a\u8349","zh-hans":"\u4f0a\u8349"}},"school":"gehenna","club":["problem_solver_68"],"id":"Haruka","img":["Haruka","Haruka_Newyear"]},{"name":{"first_name":{"ja":"\u30cf\u30eb\u30ca","en":"Haruna","ko":"\ud558\ub8e8\ub098","zh-hant":"\u7fbd\u7559\u5948","zh-hans":"\u7fbd\u7559\u5948"},"last_name":{"ja":"\u9ed2\u9928","en":"Kurodate","ko":"\ucfe0\ub85c\ub2e4\ud14c","zh-hant":"\u9ed1\u9928","zh-hans":"\u9ed1\u9986"}},"school":"gehenna","club":["gourmet_research_society"],"id":"Haruna","img":["Haruna"]},{"name":{"first_name":{"ja":"\u30ab\u30e8\u30b3","en":"Kayoko","ko":"\uce74\uc694\ucf54","zh-hant":"\u4f73\u4e16\u5b50","zh-hans":"\u4f73\u4e16\u5b50"},"last_name":{"ja":"\u9b3c\u65b9","en":"Onikata","ko":"\uc624\ub2c8\uce74\ud0c0","zh-hant":"\u9b3c\u65b9","zh-hans":"\u9b3c\u65b9"}},"school":"gehenna","club":["problem_solver_68"],"id":"Kayoko","img":["Kayoko","Kayoko_Newyear"]},{"name":{"first_name":{"ja":"\u30a2\u30eb","en":"Aru","ko":"\uc544\ub8e8","zh-hant":"\u4e9e\u7460","zh-hans":"\u4e9a\u7460"},"last_name":{"ja":"\u9678\u516b\u9b54","en":"Rikuhachima","ko":"\ub9ac\ucfe0\ud558\uce58\ub9c8","zh-hant":"\u9678\u516b\u9b54","zh-hans":"\u9646\u516b\u9b54"}},"school":"gehenna","club":["problem_solver_68"],"id":"Aru","img":["Aru","Aru_Newyear"]},{"name":{"first_name":{"ja":"\u30a4\u30aa\u30ea","en":"Iori","ko":"\uc774\uc624\ub9ac","zh-hant":"\u4f0a\u7e54","zh-hans":"\u4f0a\u7ec7"},"last_name":{"ja":"\u9280\u93e1","en":"Shiromi","ko":"\uc2dc\ub85c\ubbf8","zh-hant":"\u9280\u93e1","zh-hans":"\u94f6\u955c"}},"school":"gehenna","club":["disciplinary_committee"],"id":"Iori","img":["Iori","Iori_Swimsuit"]},{"name":{"first_name":{"ja":"\u30a4\u30ba\u30df","en":"Izumi","ko":"\uc774\uc988\ubbf8","zh-hant":"\u6cc9","zh-hans":"\u6cc9"},"last_name":{"ja":"\u7345\u5b50\u5802","en":"Shishidou","ko":"\uc2dc\uc2dc\ub3c4\uc6b0","zh-hant":"\u7345\u5b50\u5802","zh-hans":"\u72ee\u5b50\u5802"}},"school":"gehenna","club":["gourmet_research_society"],"id":"Izumi","img":["Izumi","Izumi_Swimsuit"]},{"name":{"first_name":{"ja":"\u30d2\u30ca","en":"Hina","ko":"\ud788\ub098","zh-hant":"\u967d\u5948","zh-hans":"\u9633\u5948"},"last_name":{"ja":"\u7a7a\u5d0e","en":"Sorasaki","ko":"\uc18c\ub77c\uc0ac\ud0a4","zh-hant":"\u7a7a\u5d0e","zh-hans":"\u7a7a\u5d0e"}},"school":"gehenna","club":["disciplinary_committee"],"id":"Hina","img":["Hina","Hina_Swimsuit","Hina_Nightware"]},{"name":{"first_name":{"ja":"\u30b8\u30e5\u30ea","en":"Juri","ko":"\uc8fc\ub9ac","zh-hant":"\u8331\u8389","zh-hans":"\u8331\u8389"},"last_name":{"ja":"\u725b\u7267","en":"Ushimaki","ko":"\uc6b0\uc2dc\ub9c8\ud0a4","zh-hant":"\u725b\u7267","zh-hans":"\u725b\u7267"}},"school":"gehenna","club":["school_lunch_club"],"id":"Juri","img":["Juri"]},{"name":{"first_name":{"ja":"\u30a2\u30ab\u30ea","en":"Akari","ko":"\uc544\uce74\ub9ac","zh-hant":"\u4e9e\u4f3d\u91cc","zh-hans":"\u4e9a\u4f3d\u91cc"},"last_name":{"ja":"\u9c10\u6e15","en":"Wanibuchi","ko":"\uc640\ub2c8\ubd80\uce58","zh-hant":"\u9c10\u6e15","zh-hans":"\u9cc4\u6e0a"}},"school":"gehenna","club":["gourmet_research_society"],"id":"Akari","img":["Akari"]},{"name":{"first_name":{"ja":"\u30d2\u30d5\u30df","en":"Hifumi","ko":"\ud788\ud6c4\ubbf8","zh-hant":"\u65e5\u6b65\u7f8e","zh-hans":"\u65e5\u6b65\u7f8e"},"last_name":{"ja":"\u963f\u6148\u8c37","en":"Ajitani","ko":"\uc544\uc9c0\ud0c0\ub2c8","zh-hant":"\u963f\u6148\u8c37","zh-hans":"\u963f\u6148\u8c37"}},"school":"trinity","club":["makeup_work_club","masked_swimsuit_group"],"id":"Hifumi","img":["Hifumi","Hifumi_Robber","Hifumi_Swimsuit","Hifumi_Gym","Hifumi_School_Swimsuit"]},{"name":{"first_name":{"ja":"\u30cf\u30ca\u30a8","en":"Hanae","ko":"\ud558\ub098\uc5d0","zh-hant":"\u82b1\u7e6a","zh-hans":"\u82b1\u7ed8"},"last_name":{"ja":"\u671d\u9854","en":"Asagao","ko":"\uc544\uc0ac\uac00\uc624","zh-hant":"\u671d\u9854","zh-hans":"\u671d\u989c"}},"school":"trinity","club":["remedial_knights"],"id":"Hanae","img":["Hanae"]},{"name":{"first_name":{"ja":"\u30b7\u30df\u30b3","en":"Shimiko","ko":"\uc2dc\ubbf8\ucf54","zh-hant":"\u5fd7\u7f8e\u5b50","zh-hans":"\u5fd7\u7f8e\u5b50"},"last_name":{"ja":"\u5186\u5802","en":"Endou","ko":"\uc5d4\ub3c4\uc6b0","zh-hant":"\u5186\u5802","zh-hans":"\u5706\u5802"}},"school":"trinity","club":["library_committee"],"id":"Shimiko","img":["Shimiko"]},{"name":{"first_name":{"ja":"\u30cf\u30b9\u30df","en":"Hasumi","ko":"\ud558\uc2a4\ubbf8","zh-hant":"\u84ee\u5be6","zh-hans":"\u83b2\u5b9e"},"last_name":{"ja":"\u7fbd\u5ddd","en":"Hanekawa","ko":"\ud558\ub124\uce74\uc640","zh-hant":"\u7fbd\u5ddd","zh-hans":"\u7fbd\u5ddd"}},"school":"trinity","club":["justice_task_force"],"id":"Hasumi","img":["Hasumi"]},{"name":{"first_name":{"ja":"\u30e8\u30b7\u30df","en":"Yoshimi","ko":"\uc694\uc2dc\ubbf8","zh-hant":"\u559c\u7f8e","zh-hans":"\u559c\u7f8e"},"last_name":{"ja":"\u4f0a\u539f\u6728","en":"Ibaragi","ko":"\uc774\ubc14\ub77c\uae30","zh-hant":"\u4f0a\u539f\u6728","zh-hans":"\u4f0a\u539f\u6728"}},"school":"trinity","club":["after_school_sweets_club"],"id":"Yoshimi","img":["Yoshimi"]},{"name":{"first_name":{"ja":"\u30c4\u30eb\u30ae","en":"Tsurugi","ko":"\uce20\ub8e8\uae30","zh-hant":"\u5f26\u751f","zh-hans":"\u5f26\u751f"},"last_name":{"ja":"\u5263\u5148","en":"Kenzaki","ko":"\ucf04\uc790\ud0a4","zh-hant":"\u5263\u5148","zh-hans":"\u5251\u5148"}},"school":"trinity","club":["justice_task_force"],"id":"Tsurugi","img":["Tsurugi","Tsurugi_Swimsuit"]},{"name":{"first_name":{"ja":"\u30a2\u30a4\u30ea","en":"Airi","ko":"\uc544\uc774\ub9ac","zh-hant":"\u611b\u8389","zh-hans":"\u7231\u8389"},"last_name":{"ja":"\u6817\u6751","en":"Kurimura","ko":"\ucfe0\ub9ac\ubb34\ub77c","zh-hant":"\u6817\u6751","zh-hans":"\u6817\u6751"}},"school":"trinity","club":["after_school_sweets_club"],"id":"Airi","img":["Airi"]},{"name":{"first_name":{"ja":"\u30b9\u30ba\u30df","en":"Suzumi","ko":"\uc2a4\uc988\ubbf8","zh-hant":"\u9234\u7f8e","zh-hans":"\u94c3\u7f8e"},"last_name":{"ja":"\u5b88\u6708","en":"Morizuki","ko":"\ubaa8\ub9ac\uc988\ud0a4","zh-hant":"\u5b88\u6708","zh-hans":"\u5b88\u6708"}},"school":"trinity","club":["vigilante_crew"],"id":"Suzumi","img":["Suzumi"]},{"name":{"first_name":{"ja":"\u30de\u30b7\u30ed","en":"Mashiro","ko":"\ub9c8\uc2dc\ub85c","zh-hant":"\u9ebb\u767d","zh-hans":"\u9ebb\u767d"},"last_name":{"ja":"\u9759\u5c71","en":"Shizuyama","ko":"\uc2dc\uc988\uc57c\ub9c8","zh-hant":"\u9759\u5c71","zh-hans":"\u9759\u5c71"}},"school":"trinity","club":["justice_task_force"],"id":"Mashiro","img":["Mashiro","Mashiro_Swimsuit"]},{"name":{"first_name":{"ja":"\u30bb\u30ea\u30ca","en":"Serina","ko":"\uc138\ub9ac\ub098","zh-hant":"\u82b9\u5948","zh-hans":"\u82b9\u5948"},"last_name":{"ja":"\u9df2\u898b","en":"Sumi","ko":"\uc2a4\ubbf8","zh-hant":"\u9df2\u898b","zh-hans":"\u9e6b\u898b"}},"school":"trinity","club":["remedial_knights"],"id":"Serina","img":["Serina"]},{"name":{"first_name":{"ja":"\u30e6\u30a6\u30ab","en":"Yuuka","ko":"\uc720\uc6b0\uce74","zh-hant":"\u512a\u9999","zh-hans":"\u4f18\u9999"},"last_name":{"ja":"\u65e9\u702c","en":"Hayase","ko":"\ud558\uc57c\uc138","zh-hant":"\u65e9\u702c","zh-hans":"\u65e9\u6fd1"}},"school":"millennium","club":["seminar"],"id":"Yuuka","img":["Yuuka"]},{"name":{"first_name":{"ja":"\u30a2\u30b9\u30ca","en":"Asuna","ko":"\uc544\uc2a4\ub098","zh-hant":"\u660e\u65e5\u5948","zh-hans":"\u660e\u65e5\u5948"},"last_name":{"ja":"\u4e00\u4e4b\u702c","en":"Ichinose","ko":"\uc774\uce58\ub178\uc138","zh-hant":"\u4e00\u4e4b\u702c","zh-hans":"\u4e00\u4e4b\u6fd1"}},"school":"millennium","club":["cleaning_and_clearing"],"id":"Asuna","img":["Asuna","Asuna_BunnyGirl"]},{"name":{"first_name":{"ja":"\u30a8\u30a4\u30df","en":"Eimi","ko":"\uc5d0\uc774\ubbf8","zh-hant":"\u82f1\u7f8e","zh-hans":"\u82f1\u7f8e"},"last_name":{"ja":"\u548c\u6cc9\u5143","en":"Izumimoto","ko":"\uc774\uc988\ubbf8\ubaa8\ud1a0","zh-hant":"\u548c\u6cc9\u5143","zh-hans":"\u548c\u6cc9\u5143"}},"school":"millennium","club":["super_phenomenon_task_force"],"id":"Eimi","img":["Eimi"]},{"name":{"first_name":{"ja":"\u30ab\u30ea\u30f3","en":"Karin","ko":"\uce74\ub9b0","zh-hant":"\u82b1\u51db","zh-hans":"\u82b1\u51db"},"last_name":{"ja":"\u89d2\u696f","en":"Kakudate","ko":"\uce74\ucfe0\ub2e4\ud14c","zh-hant":"\u89d2\u696f","zh-hans":"\u89d2\u696f"}},"school":"millennium","club":["cleaning_and_clearing"],"id":"Karin","img":["Karin","Karin_BunnyGirl"]},{"name":{"first_name":{"ja":"\u30de\u30ad","en":"Maki","ko":"\ub9c8\ud0a4","zh-hant":"\u771f\u7d00","zh-hans":"\u771f\u7eaa"},"last_name":{"ja":"\u5c0f\u5857","en":"Konuri","ko":"\ucf54\ub204\ub9ac","zh-hant":"\u5c0f\u5857","zh-hans":"\u5c0f\u6d82"}},"school":"millennium","club":["veritas"],"id":"Maki","img":["Maki"]},{"name":{"first_name":{"ja":"\u30cd\u30eb","en":"Neru","ko":"\ub124\ub8e8","zh-hant":"\u5be7\u7460","zh-hans":"\u5b81\u7460"},"last_name":{"ja":"\u7f8e\u7518","en":"Mikamo","ko":"\ubbf8\uce74\ubaa8","zh-hant":"\u7f8e\u7518","zh-hans":"\u7f8e\u7518"}},"school":"millennium","club":["cleaning_and_clearing"],"id":"Neru","img":["Neru","Neru_BunnyGirl"]},{"name":{"first_name":{"ja":"\u30a2\u30ab\u30cd","en":"Akane","ko":"\uc544\uce74\ub124","zh-hant":"\u6731\u97f3","zh-hans":"\u6731\u97f3"},"last_name":{"ja":"\u5ba4\u7b20","en":"Murokasa","ko":"\ubb34\ub85c\uce74\uc0ac","zh-hant":"\u5ba4\u7b20","zh-hans":"\u5ba4\u7b20"}},"school":"millennium","club":["cleaning_and_clearing"],"id":"Akane","img":["Akane","Akane_BunnyGirl"]},{"name":{"first_name":{"ja":"\u30d2\u30d3\u30ad","en":"Hibiki","ko":"\ud788\ube44\ud0a4","zh-hant":"\u97ff","zh-hans":"\u54cd"},"last_name":{"ja":"\u732b\u585a","en":"Nekozuka","ko":"\ub124\ucf54\uc988\uce74","zh-hant":"\u732b\u585a","zh-hans":"\u732b\u585a"}},"school":"millennium","club":["engineering_club"],"id":"Hibiki","img":["Hibiki"]},{"name":{"first_name":{"ja":"\u30cf\u30ec","en":"Hare","ko":"\ud558\ub808","zh-hant":"\u6674","zh-hans":"\u6674"},"last_name":{"ja":"\u5c0f\u920e","en":"Omagari","ko":"\uc624\ub9c8\uac00\ub9ac","zh-hant":"\u5c0f\u9264","zh-hans":"\u5c0f\u94a9"}},"school":"millennium","club":["veritas"],"id":"Hare","img":["Hare"]},{"name":{"first_name":{"ja":"\u30b9\u30df\u30ec","en":"Sumire","ko":"\uc2a4\ubbf8\ub808","zh-hant":"\u5807","zh-hans":"\u5807"},"last_name":{"ja":"\u4e59\u82b1","en":"Otohana","ko":"\uc624\ud1a0\ud558\ub098","zh-hant":"\u4e59\u82b1","zh-hans":"\u4e59\u82b1"}},"school":"millennium","club":["athletics_training_club"],"id":"Sumire","img":["Sumire"]},{"name":{"first_name":{"ja":"\u30b3\u30bf\u30de","en":"Kotama","ko":"\ucf54\ud0c0\ub9c8","zh-hant":"\u5c0f\u7389","zh-hans":"\u5c0f\u7389"},"last_name":{"ja":"\u97f3\u702c","en":"Otose","ko":"\uc624\ud1a0\uc138","zh-hant":"\u97f3\u702c","zh-hans":"\u97f3\u6fd1"}},"school":"millennium","club":["veritas"],"id":"Kotama","img":["Kotama"]},{"name":{"first_name":{"ja":"\u30e2\u30e2\u30a4","en":"Momoi","ko":"\ubaa8\ubaa8\uc774","zh-hant":"\u6843\u4e95","zh-hans":"\u6843\u4e95"},"last_name":{"ja":"\u624d\u7fbd","en":"Saiba","ko":"\uc0ac\uc774\ubc14","zh-hant":"\u624d\u7fbd","zh-hans":"\u624d\u7fbd"}},"school":"millennium","club":["game_development_department"],"id":"Momoi","img":["Momoi"]},{"name":{"first_name":{"ja":"\u30df\u30c9\u30ea","en":"Midori","ko":"\ubbf8\ub3c4\ub9ac","zh-hant":"\u7da0","zh-hans":"\u7eff"},"last_name":{"ja":"\u624d\u7fbd","en":"Saiba","ko":"\uc0ac\uc774\ubc14","zh-hant":"\u624d\u7fbd","zh-hans":"\u624d\u7fbd"}},"school":"millennium","club":["game_development_department"],"id":"Midori","img":["Midori"]},{"name":{"first_name":{"ja":"\u30a6\u30bf\u30cf","en":"Utaha","ko":"\uc6b0\ud0c0\ud558","zh-hant":"\u8a60\u8449","zh-hans":"\u548f\u53f6"},"last_name":{"ja":"\u767d\u77f3","en":"Shiraishi","ko":"\uc2dc\ub77c\uc774\uc2dc","zh-hant":"\u767d\u77f3","zh-hans":"\u767d\u77f3"}},"school":"millennium","club":["engineering_club"],"id":"Utaha","img":["Utaha"]},{"name":{"first_name":{"ja":"\u30a2\u30ea\u30b9","en":"Alice","ko":"\uc544\ub9ac\uc2a4","zh-hant":"\u611b\u9e97\u7d72","zh-hans":"\u7231\u4e3d\u4e1d"},"last_name":{"ja":"\u5929\u7ae5","en":"Tendou","ko":"\ud150\ub3c4","zh-hant":"\u5929\u7ae5","zh-hans":"\u5929\u7ae5"}},"school":"millennium","club":["game_development_department"],"id":"Alice","img":["Alice"]},{"name":{"first_name":{"ja":"\u30b3\u30c8\u30ea","en":"Kotori","ko":"\ucf54\ud1a0\ub9ac","zh-hant":"\u4e9e\u90fd\u68a8","zh-hans":"\u4e9a\u90fd\u68a8"},"last_name":{"ja":"\u8c4a\u898b","en":"Toyomi","ko":"\ud1a0\uc694\ubbf8","zh-hant":"\u8c4a\u898b","zh-hans":"\u4e30\u89c1"}},"school":"millennium","club":["engineering_club"],"id":"Kotori","img":["Kotori"]},{"name":{"first_name":{"ja":"\u30b7\u30e5\u30f3","en":"Shun","ko":"\uc28c","zh-hant":"\u65ec","zh-hans":"\u65ec"},"last_name":{"ja":"\u6625\u539f","en":"Sunohara","ko":"\uc2a4\ub178\ud558\ub77c","zh-hant":"\u6625\u539f","zh-hans":"\u6625\u539f"}},"school":"shanhaijing","club":["plum_blossom_garden"],"id":"Shun","img":["Shun","Shun_Little_Girl"]},{"name":{"first_name":{"ja":"\u30b5\u30e4","en":"Saya","ko":"\uc0ac\uc57c","zh-hant":"\u6c99\u8036","zh-hans":"\u6c99\u8036"},"last_name":{"ja":"\u85ac\u5b50","en":"Yakushi","ko":"\uc57c\ucfe0\uc2dc","zh-hant":"\u85ac\u5b50","zh-hans":"\u836f\u5b50"}},"school":"shanhaijing","club":["eastern_alchemy_society"],"id":"Saya","img":["Saya","Saya_Casual"]},{"name":{"first_name":{"ja":"\u30d5\u30a3\u30fc\u30ca","en":"Pina","ko":"\ud53c\ub098","zh-hant":"\u83f2\u5a1c","zh-hans":"\u83f2\u5a1c"},"last_name":{"ja":"\u671d\u6bd4\u5948","en":"Asahina","ko":"\uc544\uc0ac\ud788\ub098","zh-hant":"\u671d\u6bd4\u5948","zh-hans":"\u671d\u6bd4\u5948"}},"school":"hyakkiyako","club":["festival_operations_department"],"id":"Pina","img":["Pina"]},{"name":{"first_name":{"ja":"\u30c4\u30d0\u30ad","en":"Tsubaki","ko":"\uce20\ubc14\ud0a4","zh-hant":"\u693f","zh-hans":"\u693f"},"last_name":{"ja":"\u6625\u65e5","en":"Kasuga","ko":"\uce74\uc2a4\uac00","zh-hant":"\u6625\u65e5","zh-hans":"\u6625\u65e5"}},"school":"hyakkiyako","club":["inner_discipline_club"],"id":"Tsubaki","img":["Tsubaki"]},{"name":{"first_name":{"ja":"\u30b7\u30ba\u30b3","en":"Shizuko","ko":"\uc2dc\uc988\ucf54","zh-hant":"\u975c\u5b50","zh-hans":"\u9759\u5b50"},"last_name":{"ja":"\u6cb3\u548c","en":"Kawawa","ko":"\uce74\uc640\uc640","zh-hant":"\u6cb3\u548c","zh-hans":"\u6cb3\u548c"}},"school":"hyakkiyako","club":["festival_operations_department"],"id":"Shizuko","img":["Shizuko","Shizuko_Swimsuit"]},{"name":{"first_name":{"ja":"\u30a4\u30ba\u30ca","en":"Izuna","ko":"\uc774\uc988\ub098","zh-hant":"\u4f0a\u6a39\u83dc","zh-hans":"\u4f0a\u6811\u83dc"},"last_name":{"ja":"\u4e45\u7530","en":"Kuda","ko":"\ucfe0\ub2e4","zh-hant":"\u4e45\u7530","zh-hans":"\u4e45\u7530"}},"school":"hyakkiyako","club":["ninjutsu_research_department"],"id":"Izuna","img":["Izuna","Izuna_Swimsuit"]},{"name":{"first_name":{"ja":"\u30c1\u30bb","en":"Chise","ko":"\uce58\uc138","zh-hant":"\u77e5\u4e16","zh-hans":"\u77e5\u4e16"},"last_name":{"ja":"\u548c\u697d","en":"Waraku","ko":"\uc640\ub77c\ucfe0","zh-hant":"\u548c\u6a02","zh-hans":"\u548c\u4e50"}},"school":"hyakkiyako","club":["yin_yang_club"],"id":"Chise","img":["Chise","Chise_Swimsuit"]},{"name":{"first_name":{"ja":"\u30ce\u30c9\u30ab","en":"Nodoka","ko":"\ub178\ub3c4\uce74","zh-hant":"\u548c\u9999","zh-hans":"\u548c\u9999"},"last_name":{"ja":"\u5929\u898b","en":"Amami","ko":"\uc544\ub9c8\ubbf8","zh-hant":"\u5929\u898b","zh-hans":"\u5929\u89c1"}},"school":"red_winter","club":["special_class_no.227"],"id":"Nodoka","img":["Nodoka","Nodoka_Hotspring"]},{"name":{"first_name":{"ja":"\u30c1\u30a7\u30ea\u30ce","en":"Cherino","ko":"\uccb4\ub9ac\ub178","zh-hant":"\u6f54\u8389\u8afe","zh-hans":"\u6d01\u8389\u8bfa"},"last_name":{"ja":"\u9023\u6cb3","en":"Renkawa","ko":"\ub80c\uce74\uc640","zh-hant":"\u9023\u6cb3","zh-hans":"\u8fde\u6cb3"}},"school":"red_winter","club":["red_winter_secretariat"],"id":"Cherino","img":["Cherino","Cherino_Hotspring"]},{"name":{"first_name":{"ja":"\u30e6\u30ba","en":"Yuzu","ko":"\uc720\uc988","zh-hant":"\u67da\u5b50","zh-hans":"\u67da\u5b50"},"last_name":{"ja":"\u82b1\u5ca1","en":"Hanaoka","ko":"\ud558\ub098\uc624\uce74","zh-hant":"\u82b1\u5ca1","zh-hans":"\u82b1\u5188"}},"school":"millennium","club":["game_development_department"],"id":"Yuzu","img":["Yuzu"]},{"name":{"first_name":{"ja":"\u9ed2\u670d","en":"Black Suit","ko":"\uac80\uc740 \uc591\ubcf5","zh-hant":"\u9ed1\u670d","zh-hans":"\u9ed1\u670d"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["gematria"],"id":"Black_Suit","img":["Black_Suit"]},{"name":{"first_name":{"ja":"\u30bd\u30e9","en":"Sora","ko":"\uc18c\ub77c","zh-hant":"\u5c0f\u7a7a","zh-hans":"\u5c0f\u7a7a"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["angel_24"],"id":"Sora","img":["Sora"]},{"name":{"first_name":{"ja":"\u30a2\u30ed\u30ca","en":"Arona","ko":"\uc544\ub85c\ub098","zh-hant":"\u5f69\u5948","zh-hans":"\u5f69\u5948"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["shitim\'s_box"],"id":"Arona","img":["Arona"]},{"name":{"first_name":{"ja":"\u30ab\u30a4\u30b6\u30fcPMC\u7406\u4e8b","en":"Kaiser PMC Director","ko":"\uce74\uc774\uc800 PMC \uc774\uc0ac","zh-hant":"\u51f1\u85a9PMC\u7406\u4e8b","zh-hans":"\u51ef\u8428PMC\u7406\u4e8b"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["kaiser_pmc"],"id":"Kaiser_PMC_Director","img":["Kaiser_PMC_Director","Kaiser_PMC_Director_Summer"]},{"name":{"first_name":{"ja":"\u30de\u30a8\u30b9\u30c8\u30ed","en":"Maestro","ko":"\ub9c8\uc5d0\uc2a4\ud2b8\ub85c","zh-hant":"Maestro","zh-hans":"Maestro"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["gematria"],"id":"Maestro","img":["Maestro"]},{"name":{"first_name":{"ja":"\u67f4\u5927\u5c06","en":"Shibaseki Master","ko":"\uc2dc\ubc14\uc138\ud0a4 \uc0ac\uc7a5","zh-hant":"\u67f4\u5927\u5c06","zh-hans":"\u67f4\u5927\u5c06"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["sibaseki_ramen"],"id":"Shibaseki_Master","img":["Shibaseki_Master"]},{"name":{"first_name":{"ja":"\u30cb\u30e3\u30f3\u5929\u4e38","en":"Nyantenmaru","ko":"\ub0e5\ud150\ub9c8\ub8e8","zh-hant":"\u55b5\u5929\u4e38","zh-hans":"\u55b5\u5929\u4e38"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["hyakkiyako_commercial_district"],"id":"Nyantenmaru","img":["Nyantenmaru"]},{"name":{"first_name":{"ja":"\u30ea\u30f3","en":"Rin","ko":"\ub9b0","zh-hant":"\u7433","zh-hans":"\u7433"},"last_name":{"ja":"\u4e03\u795e","en":"Nanagami","ko":"\ub098\ub098\uac00\ubbf8","zh-hant":"\u4e03\u795e","zh-hans":"\u4e03\u795e"}},"school":"???","club":["prime_student_council"],"id":"Rin","img":["Rin"]},{"name":{"first_name":{"ja":"\u30e2\u30e2\u30ab","en":"Momoka","ko":"\ubaa8\ubaa8\uce74","zh-hant":"\u6843\u9999","zh-hans":"\u6843\u9999"},"last_name":{"ja":"\u7531\u826f\u6728","en":"Yuragi","ko":"\uc720\ub77c\uae30","zh-hant":"\u7531\u826f\u6728","zh-hans":"\u7531\u826f\u6728"}},"school":"???","club":["prime_student_council"],"id":"Momoka","img":["Momoka"]},{"name":{"first_name":{"ja":"\u30da\u30ed\u30ed\u69d8","en":"Peroro Sama","ko":"\ud398\ub85c\ub85c\ub2d8","zh-hant":"\u4f69\u6d1b\u6d1b\u5927\u4eba","zh-hans":"\u4f69\u6d1b\u6d1b\u5927\u4eba"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["momo_friends"],"id":"Peroro_Sama","img":["Peroro_Sama"]},{"name":{"first_name":{"ja":"\u30cf\u30ca\u30b3","en":"Hanako","ko":"\ud558\ub098\ucf54","zh-hant":"\u82b1\u5b50","zh-hans":"\u82b1\u5b50"},"last_name":{"ja":"\u6d66\u548c","en":"Urawa","ko":"\uc6b0\ub77c\uc640","zh-hant":"\u6d66\u548c","zh-hans":"\u6d66\u548c"}},"school":"trinity","club":["makeup_work_club"],"id":"Hanako","img":["Hanako","Hanako_Swimsuit","Hanako_Gym"]},{"name":{"first_name":{"ja":"\u30a2\u30ba\u30b5","en":"Azusa","ko":"\uc544\uc988\uc0ac","zh-hant":"\u6893","zh-hans":"\u6893"},"last_name":{"ja":"\u767d\u6d32","en":"Shirasu","ko":"\uc2dc\ub77c\uc2a4","zh-hant":"\u767d\u6d32","zh-hans":"\u767d\u6d32"}},"school":"trinity","club":["makeup_work_club"],"id":"Azusa","img":["Azusa","Azusa_Gasmask","Azusa_Swimsuit","Azusa_Gym","Azusa_Gym_Masked","Azusa_School_Swimsuit","Azusa_School_Swimsuit_Masked"]},{"name":{"first_name":{"ja":"\u30b3\u30cf\u30eb","en":"Koharu","ko":"\ucf54\ud558\ub8e8","zh-hant":"\u5c0f\u6625","zh-hans":"\u5c0f\u6625"},"last_name":{"ja":"\u4e0b\u6c5f","en":"Shimoe","ko":"\uc2dc\ubaa8\uc5d0","zh-hant":"\u4e0b\u6c5f","zh-hans":"\u4e0b\u6c5f"}},"school":"trinity","club":["makeup_work_club"],"id":"Koharu","img":["Koharu","Koharu_Gym","Koharu_School_Swimsuit"]},{"name":{"first_name":{"ja":"\u30d3\u30ca\u30fc","en":"Binah","ko":"\ube44\ub098","zh-hant":"Binah","zh-hans":"Binah"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["decagrammaton"],"id":"Binah","img":["Binah"]},{"name":{"first_name":{"ja":"\u30b1\u30bb\u30c9","en":"Chesed","ko":"\ud5e4\uc138\ub4dc","zh-hant":"Chesed","zh-hans":"Chesed"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["decagrammaton"],"id":"Chesed","img":["Chesed"]},{"name":{"first_name":{"ja":"\u30b7\u30ed","en":"Shiro","ko":"\uc2dc\ub85c","zh-hant":"\u767d","zh-hans":"\u767d"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["mimesis"],"id":"Shiro","img":["Shiro"]},{"name":{"first_name":{"ja":"\u30af\u30ed","en":"Kuro","ko":"\ucfe0\ub85c","zh-hant":"\u9ed1","zh-hans":"\u9ed1"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["mimesis"],"id":"Kuro","img":["Kuro"]},{"name":{"first_name":{"ja":"\u30d2\u30a8\u30ed\u30cb\u30e0\u30b9","en":"Hieronymus","ko":"\uc608\ub85c\ub2c8\ubb34\uc2a4","zh-hant":"Hieronymus","zh-hans":"Hieronymus"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["communio_sanctorum"],"id":"Hieronymus","img":["Hieronymus"]},{"name":{"first_name":{"ja":"\u30d8\u30eb\u30e1\u30c3\u30c8\u56e3","en":"Helmet Dan","ko":"\ud5ec\uba67\ub2e8","zh-hant":"\u982d\u76d4\u5718","zh-hans":"\u5934\u76d4\u56e2"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["helmet_dan"],"id":"Helmet_Dan","img":["Helmet_Dan_Black","Helmet_Dan_Red"]},{"name":{"first_name":{"ja":"\u30c1\u30f3\u30d4\u30e9","en":"Chimpira","ko":"\uc591\uc544\uce58","zh-hant":"Chimpira","zh-hans":"Chimpira"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["city_chimpira"],"id":"Sukeban","img":["Sukeban_HMG","Sukeban_SMG","Sukeban_SR","Sukeban_SMG_Swimsuit","Sukeban_MG_Swimsuit"]},{"name":{"first_name":{"ja":"\u9b51\u9b45\u4e00\u5ea7","en":"Sudama Ichiza","ko":"\uae38\uac70\ub9ac \ub9dd\ub7c9\uc988","zh-hant":"\u9b51\u9b45\u4e00\u5ea7","zh-hans":"\u9b51\u9b45\u4e00\u5ea7"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["sudama_ichiza"],"id":"Sudama_ichiza","img":["StreetGhoste_RL_Yukata","Yukata_StreetGhostes"]},{"name":{"first_name":{"ja":"\u30a2\u30b3","en":"Ako","ko":"\uc544\ucf54","zh-hant":"\u4e9e\u5b50","zh-hans":"\u4e9a\u5b50"},"last_name":{"ja":"\u5929\u96e8","en":"Amau","ko":"\uc544\ub9c8\uc6b0","zh-hant":"\u5929\u96e8","zh-hans":"\u5929\u96e8"}},"school":"gehenna","club":["disciplinary_committee"],"id":"Ako","img":["Ako"]},{"name":{"first_name":{"ja":"\u30ab\u30a4\u30c6\u30f3\u30b8\u30e3\u30fc","en":"Kaitenger","ko":"\uce74\uc774\ud150\uc800","zh-hant":"\u51f1\u5766\u6fa4","zh-hans":"\u51ef\u5766\u6cfd"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["kaitenger"],"id":"Kaitenger","img":["Kaitenger_Red","Kaitenger_Black","Kaitenger_Green","Kaitenger_Yellow","Kaitenger_Pink"]},{"name":{"first_name":{"ja":"KAITEN FX Mk.0","en":"KAITEN FX Mk.0","ko":"KAITEN FX Mk.0","zh-hant":"KAITEN FX Mk.0","zh-hans":"KAITEN FX Mk.0"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["kaitenger"],"id":"KAITEN_FX_Mk_0","img":["KaitenFxMk0"]},{"name":{"first_name":{"ja":"\u30ad\u30ea\u30ce","en":"Kirino","ko":"\ud0a4\ub9ac\ub178","zh-hant":"\u6850\u4e43","zh-hans":"\u6850\u4e43"},"last_name":{"ja":"\u4e2d\u52d9","en":"Nakatsukasa","ko":"\ub098\uce74\uce20\uce74\uc0ac","zh-hant":"\u4e2d\u52d9","zh-hans":"\u4e2d\u52a1"}},"school":"valkyrie","club":["community_safety_bureau"],"id":"Kirino","img":["Kirino"]},{"name":{"first_name":{"ja":"\u30de\u30ea\u30fc","en":"Mari","ko":"\ub9c8\ub9ac","zh-hant":"\u746a\u9e97","zh-hans":"\u739b\u4e3d"},"last_name":{"ja":"\u4f0a\u843d","en":"Iochi","ko":"\uc774\uc624\uce58","zh-hant":"\u4f0a\u843d","zh-hans":"\u4f0a\u843d"}},"school":"trinity","club":["sisterhood"],"id":"Mari","img":["Mari"]},{"name":{"first_name":{"ja":"\u30ca\u30c4","en":"Natsu","ko":"\ub098\uce20","zh-hant":"\u590f","zh-hans":"\u590f"},"last_name":{"ja":"\u67da\u9ce5","en":"Yutori","ko":"\uc720\ud1a0\ub9ac","zh-hant":"\u67da\u9ce5","zh-hans":"\u67da\u9e1f"}},"school":"trinity","club":["after_school_sweets_club"],"id":"Natsu","img":["Natsu"]},{"name":{"first_name":{"ja":"\u30b4\u30eb\u30b3\u30f3\u30c0","en":"Golconde","ko":"\uace8\ucf69\ub4dc","zh-hant":"Golconde","zh-hans":"Golconde"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["gematria"],"id":"Golconde","img":["Golconde"]},{"name":{"first_name":{"ja":"\u30c7\u30ab\u30eb\u30b3\u30de\u30cb\u30fc","en":"D\xe9calcomanie","ko":"\ub370\uce7c\ucf54\ub9c8\ub2c8","zh-hant":"D\xe9calcomanie","zh-hans":"D\xe9calcomanie"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["gematria"],"id":"D\xe9calcomanie","img":["D\xe9calcomanie"]},{"name":{"first_name":{"ja":"\u30da\u30ed\u30ed\u30b8\u30e9","en":"Perorozilla","ko":"\ud398\ub85c\ub85c\uc9c8\ub77c","zh-hant":"\u4f69\u6d1b\u6d1b\u65af\u62c9","zh-hans":"\u4f69\u6d1b\u6d1b\u65af\u62c9"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["the_library_of_lore"],"id":"Perorozilla","img":["Perorozilla"]},{"name":{"first_name":{"ja":"\u30ad\u30f4\u30a9\u30c8\u30b9\u5e02\u6c11","en":"Kivotos Citizen","ko":"\ud0a4\ubcf4\ud1a0\uc2a4 \uc2dc\ubbfc","zh-hant":"\u5947\u666e\u6258\u65af\u5e02\u6c11","zh-hans":"\u5947\u666e\u6258\u65af\u5e02\u6c11"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["citizen"],"id":"Citizen","img":["Citizen_Animal_1","Citizen_Animal_6","Citizen_Animal_6_Bandage","Market_Animal_2","Citizen_animal7"]},{"name":{"first_name":{"ja":"\u98a8\u7d00\u59d4\u54e1","en":"Disciplinary Committee Member","ko":"\ud48d\uae30\uc704\uc6d0","zh-hant":"\u98a8\u7d00\u59d4\u54e1","zh-hans":"\u98ce\u7eaa\u59d4\u5458"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"gehenna","club":["disciplinary_committee"],"id":"Disciplinary_Committee_Member","img":["Fuuki_Normal_1"]},{"name":{"first_name":{"ja":"\u6b63\u7fa9\u5b9f\u73fe\u59d4\u54e1\u4f1a\u90e8\u54e1","en":"Justice Task Force Member","ko":"\uc815\uc758\uc2e4\ud604\uc704\uc6d0\ud68c \ubd80\uc6d0","zh-hant":"\u5be6\u73fe\u6b63\u7fa9\u90e8\u6210\u54e1","zh-hans":"\u5b9e\u73b0\u6b63\u4e49\u90e8\u6210\u5458"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"trinity","club":["justice_task_force"],"id":"Justice_Task_Force_Member","img":["Justice_Normal_1"]},{"name":{"first_name":{"ja":"\u30a2\u30f3\u30c9\u30ed\u30a4\u30c9","en":"Android","ko":"\uc548\ub4dc\ub85c\uc774\ub4dc","zh-hant":"\u6a5f\u5668\u4eba","zh-hans":"\u673a\u5668\u4eba"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["citizen"],"id":"Android","img":["Citizen_Borot_1","Citizen_Borot_2"]},{"name":{"first_name":{"ja":"\u30ca\u30ae\u30b5","en":"Nagisa","ko":"\ub098\uae30\uc0ac","zh-hant":"\u6e1a","zh-hans":"\u6e1a"},"last_name":{"ja":"\u6850\u85e4","en":"Kirifuji","ko":"\ud0a4\ub9ac\ud6c4\uc9c0","zh-hant":"\u6850\u85e4","zh-hans":"\u6850\u85e4"}},"school":"trinity","club":["tea_party"],"id":"Nagisa","img":["Nagisa"]},{"name":{"first_name":{"ja":"\u30df\u30ab","en":"Mika","ko":"\ubbf8\uce74","zh-hant":"\u5f4c\u9999","zh-hans":"\u5f25\u9999"},"last_name":{"ja":"\u8056\u5712","en":"Misono","ko":"\ubbf8\uc18c\ub178","zh-hant":"\u8056\u5712","zh-hans":"\u5723\u56ed"}},"school":"trinity","club":["tea_party"],"id":"Mika","img":["Mika"]},{"name":{"first_name":{"ja":"\u30b7\u30b0\u30ec","en":"Shigure","ko":"\uc2dc\uad6c\ub808","zh-hant":"\u6642\u96e8","zh-hans":"\u65f6\u96e8"},"last_name":{"ja":"\u9593\u5bb5","en":"Mayoi","ko":"\ub9c8\uc694\uc774","zh-hant":"\u9593\u5bb5","zh-hans":"\u95f4\u5bb5"}},"school":"red_winter","club":["special_class_no.227"],"id":"Shigure","img":["Shigure","Shigure_Hotspring"]},{"name":{"first_name":{"ja":"\u30de\u30ea\u30ca","en":"Marina","ko":"\ub9c8\ub9ac\ub098","zh-hant":"\u746a\u9e97\u5a1c","zh-hans":"\u739b\u4e3d\u5a1c"},"last_name":{"ja":"\u6c60\u5009","en":"Ikekura","ko":"\uc774\ucf00\ucfe0\ub77c","zh-hant":"\u6c60\u5009","zh-hans":"\u6c60\u4ed3"}},"school":"red_winter","club":["red_winter_secretariat"],"id":"Marina","img":["Marina"]},{"name":{"first_name":{"ja":"\u30c8\u30e2\u30a8","en":"Tomoe","ko":"\ud1a0\ubaa8\uc5d0","zh-hant":"\u667a\u60e0","zh-hans":"\u667a\u60e0"},"last_name":{"ja":"\u4f50\u57ce","en":"Sashiro","ko":"\uc0ac\uc2dc\ub85c","zh-hant":"\u4f50\u57ce","zh-hans":"\u4f50\u57ce"}},"school":"red_winter","club":["red_winter_secretariat"],"id":"Tomoe","img":["Tomoe"]},{"name":{"first_name":{"ja":"\u30e1\u30b0","en":"Megu","ko":"\uba54\uad6c","zh-hant":"\u60e0","zh-hans":"\u60e0"},"last_name":{"ja":"\u4e0b\u5009","en":"Shimokura","ko":"\uc2dc\ubaa8\ucfe0\ub77c","zh-hant":"\u4e0b\u5009","zh-hans":"\u4e0b\u4ed3"}},"school":"gehenna","club":["onsen_development_club"],"id":"Megu","img":["Megu"]},{"name":{"first_name":{"ja":"\u30df\u30ce\u30ea","en":"Minori","ko":"\ubbf8\ub178\ub9ac","zh-hant":"\u5be6\u91cc","zh-hans":"\u5b9e\u91cc"},"last_name":{"ja":"\u5b89\u5b88","en":"Yasumori","ko":"\uc57c\uc2a4\ubaa8\ub9ac","zh-hant":"\u5b89\u5b88","zh-hans":"\u5b89\u5b88"}},"school":"red_winter","club":["construction_department"],"id":"Minori","img":["Minori"]},{"name":{"first_name":{"ja":"\u30bb\u30a4\u30a2","en":"Seia","ko":"\uc138\uc774\uc544","zh-hant":"\u8056\u4e9e","zh-hans":"\u5723\u4e9a"},"last_name":{"ja":"\u767e\u5408\u5712","en":"Yurizono","ko":"\uc720\ub9ac\uc870\ub178","zh-hant":"\u767e\u5408\u5712","zh-hans":"\u767e\u5408\u56ed"}},"school":"trinity","club":["tea_party"],"id":"Seia","img":["Seia"]},{"name":{"first_name":{"ja":"\u30c6\u30a3\u30fc\u30d1\u30fc\u30c6\u30a3\u30fc","en":"Tea Party","ko":"\ud2f0 \ud30c\ud2f0","zh-hant":"\u8336\u6703","zh-hans":"\u8336\u4f1a"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"trinity","club":["tea_party"],"id":"Tea_party","img":["Teaparty_Escort","Teaparty_Administrator"]},{"name":{"first_name":{"ja":"\u30b7\u30b9\u30bf\u30fc\u30d5\u30c3\u30c9","en":"Sisterhood","ko":"\uc2dc\uc2a4\ud130\ud6c4\ub4dc","zh-hant":"\u4fee\u5973\u6703","zh-hans":"\u4fee\u5973\u4f1a"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"trinity","club":["sisterhood"],"id":"Sisterhood","img":["Sisterhood_Executive"]},{"name":{"first_name":{"ja":"\u30ef\u30ab\u30e2","en":"Wakamo","ko":"\uc640\uce74\ubaa8","zh-hant":"\u82e5\u85fb","zh-hans":"\u82e5\u85fb"},"last_name":{"ja":"\u72d0\u5742","en":"Kosaka","ko":"\ucf54\uc0ac\uce74","zh-hant":"\u72d0\u5742","zh-hans":"\u72d0\u5742"}},"school":"hyakkiyako","club":[""],"id":"Wakamo","img":["Wakamo","Wakamo_Swimsuit"]},{"name":{"first_name":{"ja":"\u30d5\u30d6\u30ad","en":"Fubuki","ko":"\ud6c4\ubd80\ud0a4","zh-hant":"\u5439\u96ea","zh-hans":"\u5439\u96ea"},"last_name":{"ja":"\u5408\u6b53\u57a3","en":"Nemugaki","ko":"\ub124\ubb34\uac00\ud0a4","zh-hant":"\u5408\u6b53\u57a3","zh-hans":"\u5408\u6b22\u57a3"}},"school":"valkyrie","club":["community_safety_bureau"],"id":"Fubuki","img":["Fubuki"]},{"name":{"first_name":{"ja":"\u30c1\u30d2\u30ed","en":"Chihiro","ko":"\uce58\ud788\ub85c","zh-hant":"\u5343\u5c0b","zh-hans":"\u5343\u5bfb"},"last_name":{"ja":"\u5404\u52d9","en":"Kagami","ko":"\uce74\uac00\ubbf8","zh-hant":"\u5404\u52d9","zh-hans":"\u5404\u52a1"}},"school":"millennium","club":["veritas"],"id":"Chihiro","img":["Chihiro"]},{"name":{"first_name":{"ja":"\u30bb\u30ca","en":"Sena","ko":"\uc138\ub098","zh-hant":"\u7028\u5948","zh-hans":"\u6fd1\u5948"},"last_name":{"ja":"\u6c37\u5ba4","en":"Himuro","ko":"\ud788\ubb34\ub85c","zh-hant":"\u51b0\u5ba4","zh-hans":"\u51b0\u5ba4"}},"school":"gehenna","club":["emergency_medicine_club"],"id":"Sena","img":["Sena"]},{"name":{"first_name":{"ja":"\u30df\u30e2\u30ea","en":"Mimori","ko":"\ubbf8\ubaa8\ub9ac","zh-hant":"\u4e09\u68ee","zh-hans":"\u4e09\u68ee"},"last_name":{"ja":"\u6c34\u7fbd","en":"Mizuha","ko":"\ubbf8\uc988\ud558","zh-hant":"\u6c34\u7fbd","zh-hans":"\u6c34\u7fbd"}},"school":"hyakkiyako","club":["inner_discipline_club"],"id":"Mimori","img":["Mimori","Mimori_Swimsuit"]},{"name":{"first_name":{"ja":"\u30db\u30c9","en":"Hod","ko":"\ud638\ub4dc","zh-hant":"Hod","zh-hans":"Hod"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["decagrammaton"],"id":"Hod","img":["Hod"]},{"name":{"first_name":{"ja":"\u30a6\u30a4","en":"Ui","ko":"\uc6b0\uc774","zh-hant":"\u6182","zh-hans":"\u5fe7"},"last_name":{"ja":"\u53e4\u95a2","en":"Kozeki","ko":"\ucf54\uc81c\ud0a4","zh-hant":"\u53e4\u95a2","zh-hans":"\u53e4\u5173"}},"school":"trinity","club":["library_committee"],"id":"Ui","img":["Ui"]},{"name":{"first_name":{"ja":"\u30d2\u30ca\u30bf","en":"Hinata","ko":"\ud788\ub098\ud0c0","zh-hant":"\u65e5\u5411","zh-hans":"\u65e5\u5411"},"last_name":{"ja":"\u82e5\u8449","en":"Wakaba","ko":"\uc640\uce74\ubc14","zh-hant":"\u82e5\u8449","zh-hans":"\u82e5\u53f6"}},"school":"trinity","club":["sisterhood"],"id":"Hinata","img":["Hinata"]},{"name":{"first_name":{"ja":"\u30df\u30e4\u30b3","en":"Miyako","ko":"\ubbf8\uc57c\ucf54","zh-hant":"\u5bab\u5b50","zh-hans":"\u5bab\u5b50"},"last_name":{"ja":"\u6708\u96ea","en":"Tsukiyuki","ko":"\uce20\ud0a4\uc720\ud0a4","zh-hant":"\u6708\u96ea","zh-hans":"\u6708\u96ea"}},"school":"srt","club":["rabbit_platoon"],"id":"Miyako","img":["Miyako"]},{"name":{"first_name":{"ja":"\u30b5\u30ad","en":"Saki","ko":"\uc0ac\ud0a4","zh-hant":"\u54b2","zh-hans":"\u54b2"},"last_name":{"ja":"\u7a7a\u4e95","en":"Sorai","ko":"\uc18c\ub77c\uc774","zh-hant":"\u7a7a\u4e95","zh-hans":"\u7a7a\u4e95"}},"school":"srt","club":["rabbit_platoon"],"id":"Saki","img":["Saki"]},{"name":{"first_name":{"ja":"\u30df\u30e6","en":"Miyu","ko":"\ubbf8\uc720","zh-hant":"\u7f8e\u904a","zh-hans":"\u7f8e\u6e38"},"last_name":{"ja":"\u971e\u6ca2","en":"Kasumizawa","ko":"\uce74\uc2a4\ubbf8\uc790\uc640","zh-hant":"\u971e\u6fa4","zh-hans":"\u971e\u6cfd"}},"school":"srt","club":["rabbit_platoon"],"id":"Miyu","img":["Miyu"]},{"name":{"first_name":{"ja":"\u30e2\u30a8","en":"Moe","ko":"\ubaa8\uc5d0","zh-hant":"\u840c\u7e6a","zh-hans":"\u840c\u7ed8"},"last_name":{"ja":"\u98a8\u5009","en":"Kazekura","ko":"\uce74\uc81c\ucfe0\ub77c","zh-hant":"\u98a8\u5009","zh-hans":"\u98ce\u4ed3"}},"school":"srt","club":["rabbit_platoon"],"id":"Moe","img":["Moe"]},{"name":{"first_name":{"ja":"\u30a2\u30e6\u30e0","en":"Ayumu","ko":"\uc544\uc720\ubb34","zh-hant":"\u6b65","zh-hans":"\u6b65"},"last_name":{"ja":"\u5ca9\u6ac3","en":"Iwabitsu","ko":"\uc774\uc640\ube44\uce20","zh-hant":"\u5ca9\u6ac3","zh-hans":"\u5ca9\u67dc"}},"school":"???","club":["prime_student_council"],"id":"Ayumu","img":["Ayumu"]},{"name":{"first_name":{"ja":"\u30df\u30c1\u30eb","en":"Michiru","ko":"\ubbf8\uce58\ub8e8","zh-hant":"\u6eff","zh-hans":"\u6ee1"},"last_name":{"ja":"\u5343\u9ce5","en":"Chidori","ko":"\uce58\ub3c4\ub9ac","zh-hant":"\u5343\u9ce5","zh-hans":"\u5343\u9e1f"}},"school":"hyakkiyako","club":["ninjutsu_research_department"],"id":"Michiru","img":["Michiru"]},{"name":{"first_name":{"ja":"\u30a4\u30ed\u30cf","en":"Iroha","ko":"\uc774\ub85c\ud558","zh-hant":"\u4f0a\u5442\u6ce2","zh-hans":"\u4f0a\u5415\u6ce2"},"last_name":{"ja":"\u68d7","en":"Natsume","ko":"\ub098\uce20\uba54","zh-hant":"\u68d7","zh-hans":"\u67a3"}},"school":"gehenna","club":["pandemonium_society"],"id":"Iroha","img":["Iroha"]},{"name":{"first_name":{"ja":"\u30ab\u30a8\u30c7","en":"Kaede","ko":"\uce74\uc5d0\ub370","zh-hant":"\u6953","zh-hans":"\u67ab"},"last_name":{"ja":"\u52c7\u7f8e","en":"Isami","ko":"\uc774\uc0ac\ubbf8","zh-hant":"\u52c7\u7f8e","zh-hans":"\u52c7\u7f8e"}},"school":"hyakkiyako","club":["inner_discipline_club"],"id":"Kaede","img":["Kaede"]},{"name":{"first_name":{"ja":"\u30c4\u30af\u30e8","en":"Tsukuyo","ko":"\uce20\ucfe0\uc694","zh-hant":"\u7bc9\u591c","zh-hans":"\u7b51\u591c"},"last_name":{"ja":"\u5927\u91ce","en":"Oono","ko":"\uc624\uc624\ub178","zh-hant":"\u5927\u91ce","zh-hans":"\u5927\u91ce"}},"school":"hyakkiyako","club":["ninjutsu_research_department"],"id":"Tsukuyo","img":["Tsukuyo"]},{"name":{"first_name":{"ja":"\u30b5\u30aa\u30ea","en":"Saori","ko":"\uc0ac\uc624\ub9ac","zh-hant":"\u6c99\u7e54","zh-hans":"\u6c99\u7ec7"},"last_name":{"ja":"\u9320\u524d","en":"Joumae","ko":"\uc8e0\ub9c8\uc5d0","zh-hant":"\u9320\u524d","zh-hans":"\u952d\u524d"}},"school":"arius","club":["arius_squad"],"id":"Saori","img":["Saori","Saori_Masked"]},{"name":{"first_name":{"ja":"\u30d2\u30e8\u30ea","en":"Hiyori","ko":"\ud788\uc694\ub9ac","zh-hant":"\u65e5\u548c","zh-hans":"\u65e5\u548c"},"last_name":{"ja":"\u69cc\u6c38","en":"Tsuchinaga","ko":"\uce20\uce58\ub098\uac00","zh-hant":"\u69cc\u6c38","zh-hans":"\u69cc\u6c38"}},"school":"arius","club":["arius_squad"],"id":"Hiyori","img":["Hiyori"]},{"name":{"first_name":{"ja":"\u30df\u30b5\u30ad","en":"Misaki","ko":"\ubbf8\uc0ac\ud0a4","zh-hant":"\u7f8e\u54b2","zh-hans":"\u7f8e\u54b2"},"last_name":{"ja":"\u6212\u91ce","en":"Imashino","ko":"\uc774\ub9c8\uc2dc\ub178","zh-hant":"\u6212\u91ce","zh-hans":"\u6212\u91ce"}},"school":"arius","club":["arius_squad"],"id":"Misaki","img":["Misaki"]},{"name":{"first_name":{"ja":"\u30a2\u30c4\u30b3","en":"Atsuko","ko":"\uc544\uce20\ucf54","zh-hant":"\u4e9e\u6d25\u5b50","zh-hans":"\u4e9a\u6d25\u5b50"},"last_name":{"ja":"\u79e4","en":"Hakari","ko":"\ud558\uce74\ub9ac","zh-hant":"\u79e4","zh-hans":"\u79e4"}},"school":"arius","club":["arius_squad"],"id":"Atsuko","img":["Atsuko_Masked","Atsuko"]},{"name":{"first_name":{"ja":"\u30ab\u30db","en":"Kaho","ko":"\uce74\ud638","zh-hant":"\u5609\u7a57","zh-hans":"\u5609\u7a57"},"last_name":{"ja":"\u6851\u4e0a","en":"Kuwakami","ko":"\ucfe0\uc640\uce74\ubbf8","zh-hant":"\u6851\u4e0a","zh-hans":"\u6851\u4e0a"}},"school":"hyakkiyako","club":["yin_yang_club"],"id":"Kaho","img":["Kaho"]},{"name":{"first_name":{"ja":"\u30cb\u30e4","en":"Niya","ko":"\ub2c8\uc57c","zh-hant":"\u59ae\u5a6d","zh-hans":"\u59ae\u5a05"},"last_name":{"ja":"\u5929\u5730","en":"Amachi","ko":"\uc544\ub9c8\uce58","zh-hant":"\u5929\u5730","zh-hans":"\u5929\u5730"}},"school":"hyakkiyako","club":["yin_yang_club"],"id":"Niya","img":["Niya"]},{"name":{"first_name":{"ja":"\u30ab\u30f3\u30ca","en":"Kanna","ko":"\uce78\ub098","zh-hant":"\u795e\u5948","zh-hans":"\u795e\u5948"},"last_name":{"ja":"\u5c3e\u5203","en":"Ogata","ko":"\uc624\uac00\ud0c0","zh-hant":"\u5c3e\u5203","zh-hans":"\u5c3e\u5203"}},"school":"valkyrie","club":["public_safety_bureau"],"id":"Kanna","img":["Kanna"]},{"name":{"first_name":{"ja":"\u30ab\u30ba\u30b5","en":"Kazusa","ko":"\uce74\uc988\uc0ac","zh-hant":"Kazusa","zh-hans":"Kazusa"},"last_name":{"ja":"\u674f\u5c71","en":"Kyouyama","ko":"\ucfc4\uc57c\ub9c8","zh-hant":"Kyouyama","zh-hans":"Kyouyama"}},"school":"trinity","club":["after_school_sweets_club"],"id":"Kazusa","img":["Kazusa"]},{"name":{"first_name":{"ja":"\u30ec\u30a4\u30b5","en":"Reisa","ko":"\ub808\uc774\uc0ac","zh-hant":"Reisa","zh-hans":"Reisa"},"last_name":{"ja":"\u5b87\u6ca2","en":"Uzawa","ko":"\uc6b0\uc790\uc640","zh-hant":"Uzawa","zh-hans":"Uzawa"}},"school":"trinity","club":["vigilante_crew"],"id":"Reisa","img":["Reisa"]},{"name":{"first_name":{"ja":"\u30e9\u30d6","en":"Rabu","ko":"\ub77c\ube0c","zh-hant":"Rabu","zh-hans":"Rabu"},"last_name":{"ja":"\u6cb3\u99d2\u98a8","en":"Komakaze","ko":"\ucf54\ub9c8\uce74\uc81c","zh-hant":"Komakaze","zh-hans":"Komakaze"}},"school":"???","club":["helmet_dan"],"id":"Rabu","img":["Rabu"]},{"name":{"first_name":{"ja":"\u30d9\u30a2\u30c8\u30ea\u30fc\u30c1\u30a7","en":"Beatrice","ko":"\ubca0\uc544\ud2b8\ub9ac\uccb4","zh-hant":"Beatrice","zh-hans":"Beatrice"},"last_name":{"ja":"","en":"","ko":"","zh-hant":"","zh-hans":""}},"school":"???","club":["gematria"],"id":"Beatrice","img":["Beatrice"]}]'
        ),
        b = JSON.parse(
          '{"abydos":{"ja":"\u30a2\u30d3\u30c9\u30b9\u9ad8\u7b49\u5b66\u6821","en":"Abydos High school","ko":"\uc544\ube44\ub3c4\uc2a4 \uace0\ub4f1\ud559\uad50","zh-hant":"\u963f\u62dc\u591a\u65af\u9ad8\u4e2d","zh-hans":"\u963f\u62dc\u591a\u65af\u9ad8\u4e2d"},"gehenna":{"ja":"\u30b2\u30d8\u30ca\u5b66\u5712","en":"Gehenna Academy","ko":"\uac8c\ud5e8\ub098 \ud559\uc6d0","zh-hant":"\u683c\u9ed1\u5a1c\u5b78\u5712","zh-hans":"\u683c\u9ed1\u5a1c\u5b66\u56ed"},"trinity":{"ja":"\u30c8\u30ea\u30cb\u30c6\u30a3\u7dcf\u5408\u5b66\u5712","en":"Trinity General School","ko":"\ud2b8\ub9ac\ub2c8\ud2f0 \uc885\ud569\ud559\uc6d0","zh-hant":"\u4e09\u4e00\u7d9c\u5408\u5b78\u5712","zh-hans":"\u4e09\u4e00\u7efc\u5408\u5b66\u56ed"},"millennium":{"ja":"\u30df\u30ec\u30cb\u30a2\u30e0\u30b5\u30a4\u30a8\u30f3\u30b9\u30b9\u30af\u30fc\u30eb","en":"Millennium Science Academy","ko":"\ubc00\ub808\ub2c8\uc5c4 \uc0ac\uc774\uc5b8\uc2a4 \uc2a4\ucfe8","zh-hant":"\u5343\u5e74\u79d1\u5b78\u5b78\u5712","zh-hans":"\u5343\u5e74\u79d1\u5b66\u5b66\u56ed"},"shanhaijing":{"ja":"\u5c71\u6d77\u7d4c\u9ad8\u7d1a\u4e2d\u5b66\u6821","en":"Shanhaijing Senior Secondary School","ko":"\uc0b0\ud574\uacbd \uace0\uae09\uc911\ud559\uad50","zh-hant":"\u5c71\u6d77\u7d93\u9ad8\u7d1a\u4e2d\u5b78","zh-hans":"\u5c71\u6d77\u7ecf\u9ad8\u7ea7\u4e2d\u5b66"},"hyakkiyako":{"ja":"\u767e\u9b3c\u591c\u884c\u9023\u5408\u5b66\u9662","en":"Allied Hyakkiyako Academy","ko":"\ubc31\uadc0\uc57c\ud589 \uc5f0\ud569\ud559\uc6d0","zh-hant":"\u767e\u9b3c\u591c\u884c\u806f\u5408\u5b78\u5712","zh-hans":"\u767e\u9b3c\u591c\u884c\u8054\u5408\u5b66\u56ed"},"red_winter":{"ja":"\u30ec\u30c3\u30c9\u30a6\u30a3\u30f3\u30bf\u30fc\u9023\u90a6\u5b66\u5712","en":"Red Winter Federal Academy","ko":"\ub808\ub4dc\uc708\ud130 \uc5f0\ubc29\ud559\uc6d0","zh-hant":"\u8d64\u51ac\u806f\u90a6\u5b78\u5712","zh-hans":"\u8d64\u51ac\u8054\u90a6\u5b66\u56ed"},"valkyrie":{"ja":"\u30f4\u30a1\u30eb\u30ad\u30e5\u30fc\u30ec\u8b66\u5bdf\u5b66\u6821","en":"Valkyrie Police Academy","ko":"\ubc1c\ud0a4\ub9ac \uacbd\ucc30\ud559\uad50","zh-hant":"\u5973\u6b66\u795e\u8b66\u5bdf\u5b78\u5712","zh-hans":"\u5973\u6b66\u795e\u8b66\u5bdf\u5b66\u56ed"},"srt":{"ja":"SRT\u7279\u6b8a\u5b66\u5712","en":"SRT Special Academy","ko":"SRT \ud2b9\uc218\ud559\uc6d0","zh-hant":"SRT\u7279\u6b8a\u5b66\u5712","zh-hans":"SRT\u7279\u6b8a\u5b66\u56ed"},"arius":{"ja":"\u30a2\u30ea\u30a6\u30b9\u5206\u6821","en":"Arius Branch School","ko":"\uc544\ub9ac\uc6b0\uc2a4 \ubd84\uad50","zh-hant":"\u5967\u5229\u65af\u5206\u6821","zh-hans":"\u5965\u5229\u65af\u5206\u6821"}}'
        ),
        j = JSON.parse(
          '{"countermeasures_council":{"ja":"\u5bfe\u7b56\u59d4\u54e1\u4f1a","en":"Countermeasures Council","ko":"\ub300\ucc45\uc704\uc6d0\ud68c","zh-hant":"\u5c0d\u7b56\u59d4\u54e1\u6703","zh-hans":"\u5bf9\u7b56\u59d4\u5458\u4f1a"},"school_lunch_club":{"ja":"\u7d66\u98df\u90e8","en":"School Lunch Club","ko":"\uae09\uc2dd\ubd80","zh-hant":"\u4f9b\u7d66\u90e8","zh-hans":"\u4f9b\u7ed9\u90e8"},"gourmet_research_society":{"ja":"\u7f8e\u98df\u7814\u7a76\u4f1a","en":"Gourmet Research Society","ko":"\ubbf8\uc2dd\uc5f0\uad6c\ud68c","zh-hant":"\u7f8e\u98df\u7814\u7a76\u6703","zh-hans":"\u7f8e\u98df\u7814\u7a76\u4f1a"},"problem_solver_68":{"ja":"\u4fbf\u5229\u5c4b68","en":"Problem Solver 68","ko":"\ud765\uc2e0\uc18c68","zh-hant":"\u5fb5\u4fe1\u793e68","zh-hans":"\u5f81\u4fe1\u793e68"},"disciplinary_committee":{"ja":"\u98a8\u7d00\u59d4\u54e1\u4f1a","en":"Disciplinary Committee","ko":"\ud48d\uae30\uc704\uc6d0\ud68c","zh-hant":"\u7cfe\u5bdf\u90e8","zh-hans":"\u7ea0\u5bdf\u90e8"},"makeup_work_club":{"ja":"\u88dc\u7fd2\u6388\u696d\u90e8","en":"Makeup Work Club","ko":"\ubcf4\ucda9\uc218\uc5c5\ubd80","zh-hant":"\u88dc\u8ab2\u90e8","zh-hans":"\u8865\u8bfe\u90e8"},"remedial_knights":{"ja":"\u6551\u8b77\u9a0e\u58eb\u56e3","en":"Remedial Knights","ko":"\uad6c\ud638\uae30\uc0ac\ub2e8","zh-hant":"\u6551\u63f4\u9a0e\u58eb\u5718","zh-hans":"\u6551\u63f4\u9a91\u58eb\u56e2"},"library_committee":{"ja":"\u56f3\u66f8\u59d4\u54e1\u4f1a","en":"Library Committee","ko":"\ub3c4\uc11c\uc704\uc6d0\ud68c","zh-hant":"\u5716\u66f8\u90e8","zh-hans":"\u56fe\u4e66\u90e8"},"justice_task_force":{"ja":"\u6b63\u7fa9\u5b9f\u73fe\u59d4\u54e1\u4f1a","en":"Justice Task Force","ko":"\uc815\uc758\uc2e4\ud604\uc704\uc6d0\ud68c","zh-hant":"\u5be6\u73fe\u6b63\u7fa9\u90e8","zh-hans":"\u5b9e\u73b0\u6b63\u4e49\u90e8"},"after_school_sweets_club":{"ja":"\u653e\u8ab2\u5f8c\u30b9\u30a4\u30fc\u30c4\u90e8","en":"After-School Sweets Club","ko":"\ubc29\uacfc\ud6c4 \uc2a4\uc704\ud2b8\ubd80","zh-hant":"\u653e\u5b78\u5f8c\u7684\u751c\u9ede\u90e8","zh-hans":"\u653e\u5b66\u540e\u7684\u751c\u70b9\u90e8"},"vigilante_crew":{"ja":"\u30c8\u30ea\u30cb\u30c6\u30a3\u81ea\u8b66\u56e3","en":"Vigilante Crew","ko":"\ud2b8\ub9ac\ub2c8\ud2f0 \uc790\uacbd\ub2e8","zh-hant":"\u4e09\u4e00\u81ea\u885b\u968a","zh-hans":"\u4e09\u4e00\u81ea\u536b\u961f"},"seminar":{"ja":"\u30bb\u30df\u30ca\u30fc","en":"Seminar","ko":"\uc138\ubbf8\ub098","zh-hant":"\u7814\u8a0e\u6703","zh-hans":"\u7814\u8ba8\u4f1a"},"cleaning_and_clearing":{"ja":"Cleaning & Clearing","en":"Cleaning & Clearing","ko":"Cleaning & Clearing","zh-hant":"C&C","zh-hans":"C&C"},"super_phenomenon_task_force":{"ja":"\u7279\u7570\u73fe\u8c61\u7279\u52d9\u90e8","en":"Super Phenomenon Task Force","ko":"\ucd08\ud604\uc0c1\ud2b9\ubb34\ubd80","zh-hant":"\u8d85\u73fe\u8c61\u7279\u52d9\u90e8","zh-hans":"\u8d85\u73b0\u8c61\u7279\u52a1\u90e8"},"veritas":{"ja":"\u30f4\u30a7\u30ea\u30bf\u30b9","en":"Veritas","ko":"\ubca0\ub9ac\ud0c0\uc2a4","zh-hant":"\u8c9d\u91cc\u5854\u65af","zh-hans":"\u8d1d\u91cc\u5854\u65af"},"engineering_club":{"ja":"\u30a8\u30f3\u30b8\u30cb\u30a2\u90e8","en":"Engineering Club","ko":"\uc5d4\uc9c0\ub2c8\uc5b4\ubd80","zh-hant":"\u5de5\u7a0b\u5e2b\u90e8","zh-hans":"\u5de5\u7a0b\u5e08\u90e8"},"athletics_training_club":{"ja":"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u90e8","en":"Athletics Training Club","ko":"\ud2b8\ub808\uc774\ub2dd\ubd80","zh-hant":"\u8a13\u7df4\u90e8","zh-hans":"\u8bad\u7ec3\u90e8"},"game_development_department":{"ja":"\u30b2\u30fc\u30e0\u958b\u767a\u90e8","en":"Game Development Department","ko":"\uac8c\uc784\uac1c\ubc1c\ubd80","zh-hant":"\u904a\u6232\u958b\u767c\u90e8","zh-hans":"\u6e38\u620f\u5f00\u53d1\u90e8"},"plum_blossom_garden":{"ja":"\u8a13\u80b2\u652f\u63f4\u90e8\u300c\u6885\u82b1\u5712\u300d","en":"Plum Blossom Garden","ko":"\ud6c8\uc721\uc9c0\uc6d0\ubd80 \u300c\ub9e4\ud654\uc6d0\u300d","zh-hant":"\u6885\u82b1\u5712","zh-hans":"\u6885\u82b1\u56ed"},"eastern_alchemy_society":{"ja":"\u932c\u4e39\u8853\u7814\u7a76\u4f1a","en":"Eastern Alchemy Society","ko":"\uc5f0\ub2e8\uc220 \uc5f0\uad6c\ud68c","zh-hant":"\u935b\u7149\u5c4b","zh-hans":"\u953b\u70bc\u5c4b"},"festival_operations_department":{"ja":"\u304a\u796d\u308a\u904b\u55b6\u59d4\u54e1\u4f1a","en":"Festival Operations Department","ko":"\ucd95\uc81c\uc6b4\uc601\uc704\uc6d0\ud68c","zh-hant":"\u7bc0\u6176\u71df\u904b\u7ba1\u7406\u90e8","zh-hans":"\u8282\u5e86\u8425\u8fd0\u7ba1\u7406\u90e8"},"inner_discipline_club":{"ja":"\u4fee\u884c\u90e8","en":"Inner Discipline Club","ko":"\uc218\ud589\ubd80","zh-hant":"\u57f7\u884c\u90e8","zh-hans":"\u4fee\u884c\u90e8"},"ninjutsu_research_department":{"ja":"\u5fcd\u8853\u7814\u7a76\u90e8","en":"Ninjutsu Research Department","ko":"\uc778\uc220\uc5f0\uad6c\ubd80","zh-hant":"\u5fcd\u6cd5\u7814\u7a76\u90e8","zh-hans":"\u5fcd\u6cd5\u7814\u7a76\u90e8"},"yin_yang_club":{"ja":"\u9670\u967d\u90e8","en":"Yin-Yang Club","ko":"\uc74c\uc591\ubd80","zh-hant":"\u9670\u967d\u90e8","zh-hans":"\u9634\u9633\u90e8"},"special_class_no.227":{"ja":"227\u53f7\u7279\u5225\u30af\u30e9\u30b9","en":"Special Class No.227","ko":"227\ud638 \ud2b9\ubcc4\ubc18","zh-hant":"227\u7279\u5225\u73ed","zh-hans":"227\u7279\u522b\u73ed"},"red_winter_secretariat":{"ja":"\u30ec\u30c3\u30c9\u30a6\u30a3\u30f3\u30bf\u30fc\u4e8b\u52d9\u5c40","en":"Red Winter Secretariat","ko":"\ub808\ub4dc\uc708\ud130 \uc0ac\ubb34\uad6d","zh-hant":"\u8d64\u51ac\u4e8b\u52d9\u5c40","zh-hans":"\u8d64\u51ac\u4e8b\u52a1\u5c40"},"gematria":{"ja":"\u30b2\u30de\u30c8\u30ea\u30a2","en":"Gematria","ko":"\uac8c\ub9c8\ud2b8\ub9ac\uc544","zh-hant":"\u84cb\u746a\u7279\u5229\u4e9e","zh-hans":"\u76d6\u739b\u7279\u5229\u4e9a"},"angel_24":{"ja":"\u30a8\u30f3\u30b8\u30a7\u30eb24","en":"Angel 24","ko":"\uc5d4\uc82424 \ud3b8\uc758\uc810","zh-hant":"\u5929\u4f7f24","zh-hans":"\u5929\u4f7f24"},"shitim\'s_box":{"ja":"\u30b7\u30c3\u30c6\u30e0\u306e\u7bb1","en":"Shittim Chests","ko":"\uc2ef\ub524\uc758 \uc0c1\uc790","zh-hant":"\u5e0c\u8fea\u59c6\u7684\u7bb1\u5b50","zh-hans":"\u5e0c\u8fea\u59c6\u7684\u7bb1\u5b50"},"kaiser_pmc":{"ja":"\u30ab\u30a4\u30b6\u30fcPMC","en":"Kaiser PMC","ko":"\uce74\uc774\uc800 PMC","zh-hant":"\u51f1\u85a9PMC","zh-hans":"\u51ef\u8428PMC"},"sibaseki_ramen":{"ja":"\u67f4\u95a2\u30e9\u30fc\u30e1\u30f3","en":"Sibaseki Ramen","ko":"\uc2dc\ubc14\uc138\ud0a4 \ub77c\uba58","zh-hant":"\u67f4\u95dc\u62c9\u9eb5","zh-hans":"\u67f4\u5173\u62c9\u9762"},"hyakkiyako_commercial_district":{"ja":"\u767e\u9b3c\u591c\u884c\u5546\u5e97\u8857","en":"Hyakkiyako Commercial district","ko":"\ubc31\uadc0\uc57c\ud589 \uc0c1\uc810\uac00","zh-hant":"\u767e\u9b3c\u591c\u884c\u5546\u5e97\u8857","zh-hans":"\u767e\u9b3c\u591c\u884c\u5546\u5e97\u8857"},"prime_student_council":{"ja":"\u9023\u90a6\u751f\u5f92\u4f1a","en":"Prime Student Council","ko":"\uc5f0\ubc29\ud559\uc0dd\ud68c","zh-hant":"\u7e3d\u5b78\u751f\u6703","zh-hans":"\u603b\u5b66\u751f\u4f1a"},"masked_swimsuit_group":{"ja":"\u8986\u9762\u6c34\u7740\u56e3","en":"Masked Swimsuit Group","ko":"\ubcf5\uba74\uc218\uc601\ubcf5\ub2e8","zh-hant":"\u8499\u9762\u6cf3\u88dd\u5718","zh-hans":"\u8499\u9762\u6cf3\u88c5\u56e2"},"momo_friends":{"ja":"\u30e2\u30e2\u30d5\u30ec\u30f3\u30ba","en":"Momo Friends","ko":"\ubaa8\ubaa8\ud504\ub80c\uc988","zh-hant":"Momo\u597d\u53cb","zh-hans":"Momo\u597d\u53cb"},"decagrammaton":{"ja":"\u30c7\u30ab\u30b0\u30e9\u30de\u30c8\u30f3","en":"Decagrammaton","ko":"\ub370\uce74\uadf8\ub77c\ub9c8\ud1a4","zh-hant":"\u5341\u5b57\u795e","zh-hans":"\u5341\u5b57\u795e"},"mimesis":{"ja":"\u30df\u30e1\u30b7\u30b9","en":"Mimesis","ko":"\ubbf8\uba54\uc2dc\uc2a4","zh-hant":"Mimesis","zh-hans":"Mimesis"},"communio_sanctorum":{"ja":"\u30b3\u30e0\u30cb\u30aa\u30fb\u30b5\u30f3\u30af\u30c8\u30e9\u30e0","en":"Communio Sanctorum","ko":"\ucf54\ubba4\ub2c8\uc624 \uc0c1\ud1a0\ub8f8","zh-hant":"Communio Sanctorum","zh-hans":"Communio Sanctorum"},"helmet_dan":{"ja":"\u30d8\u30eb\u30e1\u30c3\u30c8\u56e3","en":"Helmet Dan","ko":"\ud5ec\uba67\ub2e8","zh-hant":"\u982d\u76d4\u5718","zh-hans":"\u5934\u76d4\u56e2"},"city_chimpira":{"ja":"\u8857\u306e\u30c1\u30f3\u30d4\u30e9","en":"City Chimpira","ko":"\uae38\uac70\ub9ac \uc591\uc544\uce58","zh-hant":"\u8857\u982d\u66b4\u5f92","zh-hans":"\u8857\u5934\u66b4\u5f92"},"sudama_ichiza":{"ja":"\u9b51\u9b45\u4e00\u5ea7","en":"Sudama Ichiza","ko":"\uae38\uac70\ub9ac \ub9dd\ub7c9\uc988","zh-hant":"\u5927\u8857\u9b51\u9b45\u4e00\u5ea7","zh-hans":"\u5927\u8857\u9b51\u9b45\u4e00\u5ea7"},"kaitenger":{"ja":"\u30ab\u30a4\u30c6\u30f3\u30b8\u30e3\u30fc","en":"Kaitenger","ko":"\uce74\uc774\ud150\uc800","zh-hant":"\u51f1\u5766\u6fa4","zh-hans":"\u51ef\u5766\u6cfd"},"community_safety_bureau":{"ja":"\u751f\u6d3b\u5b89\u5168\u5c40","en":"Community Safety Bureau","ko":"\uc0dd\ud65c\uc548\uc804\uad6d","zh-hant":"\u751f\u6d3b\u5b89\u5168\u5c40","zh-hans":"\u751f\u6d3b\u5b89\u5168\u5c40"},"sisterhood":{"ja":"\u30b7\u30b9\u30bf\u30fc\u30d5\u30c3\u30c9","en":"Sisterhood","ko":"\uc2dc\uc2a4\ud130\ud6c4\ub4dc","zh-hant":"\u4fee\u5973\u6703","zh-hans":"\u4fee\u5973\u4f1a"},"the_library_of_lore":{"ja":"The Library of Lore","en":"The Library of Lore","ko":"The Library of Lore","zh-hant":"The Library of Lore","zh-hans":"The Library of Lore"},"citizen":{"ja":"\u5e02\u6c11","en":"Citizen","ko":"\uc2dc\ubbfc","zh-hant":"\u5e02\u6c11","zh-hans":"\u5e02\u6c11"},"tea_party":{"ja":"\u30c6\u30a3\u30fc\u30d1\u30fc\u30c6\u30a3\u30fc","en":"Tea Party","ko":"\ud2f0 \ud30c\ud2f0","zh-hant":"\u8336\u6703","zh-hans":"\u8336\u4f1a"},"onsen_development_club":{"ja":"\u6e29\u6cc9\u958b\u767a\u90e8","en":"Onsen Development Club","ko":"\uc628\ucc9c\uac1c\ubc1c\ubd80","zh-hant":"\u6eab\u6cc9\u958b\u767c\u90e8","zh-hans":"\u6e29\u6cc9\u5f00\u53d1\u90e8"},"construction_department":{"ja":"\u5de5\u52d9\u90e8","en":"Construction Department","ko":"\uacf5\uc0ac\ubd80","zh-hant":"\u52de\u52d9\u90e8","zh-hans":"\u52b3\u52a1\u90e8"},"emergency_medicine_club":{"ja":"\u6551\u6025\u533b\u5b66\u90e8","en":"Emergency Medicine Club","ko":"\uad6c\uae09\uc758\ud559\ubd80","zh-hant":"\u6551\u6025\u533b\u5b66\u90e8","zh-hans":"\u6551\u6025\u533b\u5b66\u90e8"},"rabbit_platoon":{"ja":"RABBIT\u5c0f\u968a","en":"RABBIT Platoon","ko":"RABBIT \uc18c\ub300","zh-hant":"RABBIT\u5c0f\u968a","zh-hans":"RABBIT\u5c0f\u961f"},"pandemonium_society":{"ja":"\u30d1\u30f3\u30c7\u30e2\u30cb\u30a6\u30e0\u30fb\u30bd\u30b5\u30a8\u30c6\u30a3\u30fc","en":"Pandemonium Society","ko":"\ud310\ub370\ubaa8\ub2c8\uc6c0 \uc18c\uc0ac\uc774\uc5b4\ud2f0","zh-hant":"\u842c\u9b54\u6bbf\u5b78\u6703","zh-hans":"\u4e07\u9b54\u6bbf\u5b66\u4f1a"},"arius_squad":{"ja":"\u30a2\u30ea\u30a6\u30b9\u30b9\u30af\u30ef\u30c3\u30c9","en":"Arius Squad","ko":"\uc544\ub9ac\uc6b0\uc2a4 \uc2a4\ucffc\ub4dc","zh-hant":"\u5967\u5229\u65af\u5c0f\u968a","zh-hans":"\u5965\u5229\u65af\u5c0f\u961f"},"public_safety_bureau":{"ja":"\u516c\u5b89\u5c40","en":"Public Safety Bureau","ko":"\uacf5\uc548\uad6d","zh-hant":"\u516c\u5b89\u5c40","zh-hans":"\u516c\u5b89\u5c40"}}'
        ),
        S = e(4842),
        v = function (n) {
          var a = n.code,
            e = n.pageCnt,
            t = n.stampCnt;
          if (!a) return [];
          "ja" === a.toLowerCase() && (a = "ja"), (a = "ja");
          for (var o = [], r = 0; r < e; r++)
            for (var i = 0; i < t; i++) {
              var s = 10 * r + (i + 1);
              o.push(
                "/images/stamp/"
                  .concat(a, "/")
                  .concat(s.toString().padStart(2, "0"), ".png")
              );
            }
          return o;
        };
      function w(n, a) {
        var e = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(n);
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(n, a).enumerable;
            })),
            e.push.apply(e, t);
        }
        return e;
      }
      function x(n) {
        for (var a = 1; a < arguments.length; a++) {
          var e = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? w(Object(e), !0).forEach(function (a) {
                (0, d.Z)(n, a, e[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
            : w(Object(e)).forEach(function (a) {
                Object.defineProperty(
                  n,
                  a,
                  Object.getOwnPropertyDescriptor(e, a)
                );
              });
        }
        return n;
      }
      function C(n, a) {
        var e =
          ("undefined" !== typeof Symbol && n[Symbol.iterator]) ||
          n["@@iterator"];
        if (!e) {
          if (
            Array.isArray(n) ||
            (e = (function (n, a) {
              if (!n) return;
              if ("string" === typeof n) return Z(n, a);
              var e = Object.prototype.toString.call(n).slice(8, -1);
              "Object" === e && n.constructor && (e = n.constructor.name);
              if ("Map" === e || "Set" === e) return Array.from(n);
              if (
                "Arguments" === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              )
                return Z(n, a);
            })(n)) ||
            (a && n && "number" === typeof n.length)
          ) {
            e && (n = e);
            var t = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return t >= n.length
                  ? { done: !0 }
                  : { done: !1, value: n[t++] };
              },
              e: function (n) {
                throw n;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var r,
          i = !0,
          s = !1;
        return {
          s: function () {
            e = e.call(n);
          },
          n: function () {
            var n = e.next();
            return (i = n.done), n;
          },
          e: function (n) {
            (s = !0), (r = n);
          },
          f: function () {
            try {
              i || null == e.return || e.return();
            } finally {
              if (s) throw r;
            }
          },
        };
      }
      function Z(n, a) {
        (null == a || a > n.length) && (a = n.length);
        for (var e = 0, t = new Array(a); e < a; e++) t[e] = n[e];
        return t;
      }
      var M = function () {
          var n = i.FV(s.Qy),
            a = (0, r.Z)(n, 2),
            e = a[0],
            o = a[1],
            l = i.FV(s.GL),
            c = (0, r.Z)(l, 2),
            d = c[0],
            f = c[1],
            y = i.FV(s.fP),
            b = (0, r.Z)(y, 2),
            j = (b[0], b[1]),
            w = i.FV(s.oK),
            Z = (0, r.Z)(w, 2),
            M = Z[0],
            E = Z[1],
            T = i.FV(s.mP),
            N = (0, r.Z)(T, 2),
            D = N[0],
            I = N[1],
            O = i.FV(s.TL),
            K = (0, r.Z)(O, 2),
            F = K[0],
            R = K[1],
            L = i.FV(s.dA),
            P = (0, r.Z)(L, 2),
            B = P[0],
            G = P[1],
            U = i.FV(s.D7),
            Y = (0, r.Z)(U, 2),
            J = Y[0],
            W = (Y[1], i.FV(s.z$)),
            V = (0, r.Z)(W, 2),
            X = V[0],
            q = V[1],
            Q = i.FV(s.c_),
            $ = (0, r.Z)(Q, 2),
            nn = $[0],
            an = $[1],
            en = i.FV(s.dq),
            tn = (0, r.Z)(en, 2),
            on = tn[0],
            rn = tn[1],
            sn = i.FV(s.kL),
            hn = (0, r.Z)(sn, 2),
            ln = hn[0],
            cn = hn[1],
            un = i.Zl(s.Go),
            mn = i.FV(s.Xs),
            dn = (0, r.Z)(mn, 2),
            fn = dn[0],
            gn = dn[1],
            kn = i.FV(s.VI),
            _n = (0, r.Z)(kn, 2),
            zn = (_n[0], _n[1]),
            pn = i.FV(s.NM),
            yn = (0, r.Z)(pn, 2),
            bn = yn[0],
            jn = yn[1],
            Sn = i.sJ(s.Bl),
            vn = i.sJ(s.Ki),
            wn = "yuzutalk_",
            xn = k.bD.SESSION;
          if (
            (t.useEffect(function () {
              var n = (0, h.Rm)();
              o(n),
                j((0, _.ux)(vn, A(n.code))),
                p(xn) &&
                  [
                    { key: k.Uf.LOCALE, setter: o },
                    { key: k.Uf.SELECT_CHARACTER, setter: E },
                    { key: k.Uf.MESSAGE_LIST, setter: f },
                    { key: k.Uf.SWIPE, setter: R },
                    { key: k.Uf.MESSAGE_SENDER, setter: I },
                  ].map(function (n) {
                    var a = window[xn].getItem(wn + n.key);
                    "" !== a && null !== a && n.setter(JSON.parse(a));
                  }),
                p(k.bD.LOCAL) &&
                  [
                    { key: k.Uf.IMAGING_MAGNIFICATION, setter: G },
                    { key: k.Uf.NEWS_LATEST_DATE, setter: jn },
                  ].map(function (n) {
                    var a = window[k.bD.LOCAL].getItem(wn + n.key);
                    "" !== a && null !== a && n.setter(JSON.parse(a));
                  });
              var a = v({
                stampCnt: u.r.count.stampCount,
                code: e.code,
                pageCnt: u.r.count.stampPage,
              });
              for (var t in a) {
                document.createElement("img").src = a[t];
              }
            }, []),
            t.useEffect(
              function () {
                0 !== Object.keys(X).length && ((0, z.gM)(X, f), q({}));
              },
              [X]
            ),
            t.useEffect(
              function () {
                -1 !== nn && ((0, z.pD)(nn, f), an(-1));
              },
              [nn]
            ),
            t.useEffect(
              function () {
                -1 !== on && ((0, z.lA)(on, f), rn(-1));
              },
              [on]
            ),
            t.useEffect(
              function () {
                var n;
                null === (n = document.querySelector("html")) ||
                  void 0 === n ||
                  n.setAttribute("lang", e.code);
                var a = (0, _.ux)(vn, A(e.code));
                j(a),
                  f(function (n) {
                    var e,
                      t = [],
                      o = C(n);
                    try {
                      var r = function () {
                        var n = e.value;
                        if (n.sender === k._n.TEACHER)
                          return t.push(n), "continue";
                        var o = a.find(function (a) {
                          return a.id === n.character.id;
                        });
                        if (void 0 === o) return "continue";
                        t.push(
                          x(
                            x({}, n),
                            {},
                            {
                              character: x(
                                x({}, o),
                                {},
                                { imgIndex: n.character.imgIndex }
                              ),
                            }
                          )
                        );
                      };
                      for (o.s(); !(e = o.n()).done; ) r();
                    } catch (i) {
                      o.e(i);
                    } finally {
                      o.f();
                    }
                    return [].concat(t);
                  }),
                  E(function (n) {
                    if (0 === Object.keys(n).length) return {};
                    var e = a.find(function (a) {
                      return a.id === n.id;
                    });
                    return void 0 === e
                      ? {}
                      : x(x({}, e), {}, { imgIndex: n.imgIndex });
                  });
              },
              [e]
            ),
            t.useEffect(
              function () {
                j(function (n) {
                  return (0, _.ux)(vn, n);
                });
              },
              [vn]
            ),
            t.useEffect(
              function () {
                ln && (f([]), E({}), I(k._n.CHARACTER), R(!1), un(!1), cn(!1));
              },
              [ln]
            ),
            t.useEffect(
              function () {
                fn &&
                  0 !== Object.keys(Sn).length &&
                  S.YM(Sn, { backgroundColor: u.r.color.chat })
                    .then(function () {
                      S.YM(Sn, { backgroundColor: u.r.color.chat })
                        .then(function (n) {
                          var a = document.createElement("a");
                          (a.download = "yuzu-talk_".concat(
                            Date.now().toString(),
                            ".png"
                          )),
                            (a.href = n),
                            a.click();
                        })
                        .catch(function (n) {
                          console.error("html to image error: ", n);
                        })
                        .finally(function () {
                          gn(!1);
                        });
                    })
                    .catch(function (n) {
                      console.error("html to image error: ", n);
                    })
                    .finally(function () {
                      gn(!1);
                    });
              },
              [fn]
            ),
            p(xn))
          ) {
            var Cn = window[xn];
            t.useEffect(
              function () {
                Cn.setItem(wn + k.Uf.LOCALE, JSON.stringify(e));
              },
              [e]
            ),
              t.useEffect(
                function () {
                  Cn.setItem(wn + k.Uf.SELECT_CHARACTER, JSON.stringify(M));
                },
                [M]
              ),
              t.useEffect(
                function () {
                  Cn.setItem(wn + k.Uf.MESSAGE_LIST, JSON.stringify(d));
                },
                [d]
              ),
              t.useEffect(
                function () {
                  Cn.setItem(wn + k.Uf.SWIPE, JSON.stringify(F));
                },
                [F]
              ),
              t.useEffect(
                function () {
                  Cn.setItem(wn + k.Uf.MESSAGE_SENDER, JSON.stringify(D));
                },
                [D]
              );
          }
          if (p(k.bD.LOCAL)) {
            var Zn = window[k.bD.LOCAL];
            t.useEffect(
              function () {
                Zn.setItem(wn + k.Uf.IMAGING_MAGNIFICATION, JSON.stringify(B));
              },
              [B]
            ),
              t.useEffect(
                function () {
                  Zn.setItem(wn + k.Uf.NEWS_LATEST_DATE, JSON.stringify(bn)),
                    (0, m.Z)(
                      g().mark(function n() {
                        var a, t, o;
                        return g().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (n.next = 2), H(e.code);
                              case 2:
                                return (
                                  (n.next = 4),
                                  n.sent.map(function (n) {
                                    return {
                                      body: n.body,
                                      date: n.date.replace(/\//g, "-"),
                                      title: n.title,
                                    };
                                  })
                                );
                              case 4:
                                (a = n.sent),
                                  (t = new Date(a[a.length - 1].date)),
                                  (o = new Date(bn)),
                                  zn("" === bn || t > o);
                              case 9:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })
                    )();
                },
                [bn]
              );
          }
          return { openDialog: J };
        },
        A = function (n) {
          var a = b,
            e = j;
          return y.map(function (t) {
            var o = t.club.map(function (a) {
              return "" === a ? "" : e[a][n];
            });
            return {
              first_name: E(t, "first_name", n),
              last_name: E(t, "last_name", n),
              school: "???" === t.school ? "???" : a[t.school][n],
              club: o,
              emblem: "???" === t.school ? "???" : a[t.school].en,
              img: t.img,
              imgIndex: 0,
              id: t.id,
              editable: !!t.editable,
            };
          });
        },
        E = function (n, a, e) {
          return "undefined" === typeof n.name[a][e]
            ? n.name[a].ja
            : n.name[a][e];
        },
        H = (function () {
          var n = (0, m.Z)(
            g().mark(function n(a) {
              var t;
              return g().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = (0, h.Vi)(a)),
                        n.abrupt(
                          "return",
                          e(9488)("./news_".concat(t, ".yaml"))
                            .then(function (n) {
                              return n.default;
                            })
                            .catch(function (n) {
                              return console.error(n);
                            })
                        )
                      );
                    case 2:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
          return function (a) {
            return n.apply(this, arguments);
          };
        })(),
        T = e(6501),
        N = function () {
          var n = i.FV(s.Qy),
            a = (0, r.Z)(n, 2),
            e = a[0],
            t = a[1],
            o = i.FV(s.dA),
            l = (0, r.Z)(o, 2),
            c = l[0],
            u = l[1],
            m = i.Zl(s.D7);
          return {
            text_setting: (0, h.vN)("setting"),
            text_language: (0, h.vN)("language"),
            text_download: (0, h.vN)("download"),
            langList: T,
            current_language: e.code,
            current_mag: c,
            languageChangeHandler: function (n) {
              var a = T.filter(function (a) {
                return a.code === n.currentTarget.value;
              });
              0 !== a.length && t(a[0]);
            },
            magnificationChangeHandler: function (n) {
              u(Number(n.currentTarget.value));
            },
            closeClickHandler: function () {
              m({ dialog: "", open: !1 });
            },
          };
        },
        D = function () {
          var n = i.Zl(s.D7),
            a = i.sJ(s.Qy),
            e = O(I(a.language)),
            o = t.useRef(null);
          return (
            t.useEffect(function () {
              if (null !== o.current) {
                var n = (function (n) {
                  var a = n.querySelectorAll(
                      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
                    ),
                    e = a[0],
                    t = a[a.length - 1];
                  return (
                    "undefined" !== typeof e && e.focus(),
                    function (n) {
                      ("Tab" === n.key || "Tab" === n.code) &&
                        (n.shiftKey
                          ? document.activeElement === e &&
                            (t.focus(), n.preventDefault())
                          : document.activeElement === t &&
                            (e.focus(), n.preventDefault()));
                    }
                  );
                })(o.current);
                return (
                  o.current.addEventListener("keydown", n),
                  function () {
                    null !== o.current &&
                      o.current.removeEventListener("keydown", n);
                  }
                );
              }
            }),
            {
              frameRef: o,
              font: e,
              overlayClickHandler: function () {
                n({ dialog: "", open: !1 });
              },
            }
          );
        },
        I = function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "english";
          return "japanese" === n ? "japanese" : "english";
        },
        O = function (n) {
          var a = e(2050);
          return "undefined" === typeof a[n] ? a.english : a[n];
        };
      var K = function (n) {
          var a = D();
          return (0, c.tZ)(
            "section",
            { ref: a.frameRef, css: R },
            (0, c.tZ)(
              "div",
              { css: P },
              (0, c.tZ)(
                "div",
                { css: B(n.backgroundColor, n.localeFont, a.font) },
                n.children
              )
            ),
            (0, c.tZ)("div", { css: L, onClick: a.overlayClickHandler })
          );
        },
        F = t.memo(K),
        R = {
          name: "1ympn10",
          styles:
            "position:fixed;top:0;right:0;bottom:0;left:0;margin:auto;z-index:9999",
        },
        L = {
          name: "aevwfb",
          styles:
            "position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.75)",
        },
        P = (0, c.iv)(
          "max-width:",
          u.r.layout.windowMaxWidth / 2,
          "px;height:calc(100% - (",
          2 * u.r.size.medium,
          "px));margin:auto;margin-top:",
          u.r.size.medium,
          "px;",
          "",
          ""
        ),
        B = function (n, a, e) {
          return (0, c.iv)(
            "position:relative;z-index:1;display:grid;grid-template-columns:1fr;grid-template-rows:auto minmax(auto, 1fr) auto;max-height:100%;margin:",
            u.r.layout.margin,
            "px;border-radius:10px;overflow:hidden;",
            n && (0, c.iv)("background-color:", n, ";", "", ""),
            " ",
            a && (0, c.iv)("*{font-family:", e.fontFamily, ";}", "", ""),
            ";",
            "",
            ""
          );
        },
        G = function (n) {
          return (0, c.tZ)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 64 64",
              width: n.width,
              height: n.height,
            },
            (0, c.tZ)("rect", {
              width: "8",
              height: "64",
              x: "41.3",
              y: "-32",
              rx: "0",
              ry: "0",
              transform: "rotate(45)",
              fill: n.fill,
            }),
            (0, c.tZ)("rect", {
              width: "8",
              height: "64",
              x: "-4",
              y: "-77.3",
              rx: "0",
              ry: "0",
              transform: "rotate(135)",
              fill: n.fill,
            })
          );
        },
        U = t.memo(G);
      var Y = t.memo(function (n) {
          return (0,
          c.tZ)("div", { css: V(n) }, (0, c.tZ)("header", null, (0, c.tZ)("span", { className: "title" }, n.children)), (0, c.tZ)("button", { type: "button", onClick: n.closeHandler }, (0, c.tZ)(U, { width: u.r.fontSize.large, height: u.r.fontSize.large, fill: u.r.color.accent })));
        }),
        J = { name: "10ti06o", styles: "grid-area:right" },
        W = { name: "17mkztv", styles: "grid-area:left" },
        V = function (n) {
          return (0, c.iv)(
            'display:grid;grid-template-columns:1fr auto 1fr auto;grid-template-rows:1fr;grid-template-areas:"left center right close";align-items:center;',
            n.borderColor &&
              (0, c.iv)("border:1px solid ", n.borderColor, ";", "", ""),
            " padding:0 ",
            u.r.layout.margin,
            "px;",
            n.color && (0, c.iv)("color:", n.color, ";", "", ""),
            " ",
            n.fontFamily &&
              (0, c.iv)("font-family:", n.fontFamily, ";", "", ""),
            " ",
            n.fontSize && (0, c.iv)("font-size:", n.fontSize, "px;", "", ""),
            " ",
            n.fontStyle && (0, c.iv)("font-style:", n.fontSize, ";", "", ""),
            " font-weight:bold;",
            n.backgroundColor &&
              (0, c.iv)("background-color:", n.backgroundColor, ";", "", ""),
            " header{grid-area:center;",
            "left" === n.justify && W,
            " ",
            "right" === n.justify && J,
            " padding:",
            u.r.layout.margin,
            "px 0;",
            n.underBarColor &&
              (0, c.iv)(
                "border-bottom:4px solid ",
                n.underBarColor,
                ";padding:",
                u.r.layout.margin / 2,
                "px 0;",
                "",
                ""
              ),
            ";}button{grid-area:close;display:flex;justify-content:center;align-items:center;width:fit-content;height:fit-content;background-color:transparent;border:2px solid transparent;outline:none;padding:",
            u.r.layout.margin / 4,
            "px;transition:transform 50ms ease;&:focus-visible{border-color:",
            u.r.color.outline,
            ";}&:active{transform:scale(0.95);}}",
            "",
            ""
          );
        },
        X = t.memo(function () {
          var n = N();
          return (0, c.tZ)(
            F,
            null,
            (0, c.tZ)(
              Y,
              {
                color: u.r.color.accent,
                backgroundColor: u.r.color.secondary,
                fontSize: "".concat(u.r.fontSize.large),
                justify: "center",
                underBarColor: u.r.color.primary,
                borderColor: u.r.color.border,
                closeHandler: n.closeClickHandler,
              },
              n.text_setting
            ),
            (0, c.tZ)(
              "div",
              { css: q },
              (0, c.tZ)(
                "div",
                { css: Q },
                (0, c.tZ)(
                  "div",
                  { css: $ },
                  (0, c.tZ)(
                    "div",
                    { css: nn },
                    (0, c.tZ)("span", { className: "text" }, n.text_language)
                  ),
                  (0, c.tZ)(
                    "div",
                    { css: an },
                    (0, c.tZ)(
                      "select",
                      {
                        onChange: n.languageChangeHandler,
                        value: n.current_language,
                      },
                      n.langList.map(function (n, a) {
                        return (0,
                        c.tZ)("option", { key: a, value: n.code }, n.display);
                      })
                    )
                  )
                ),
                (0, c.tZ)(
                  "div",
                  { css: $ },
                  (0, c.tZ)(
                    "div",
                    { css: nn },
                    (0, c.tZ)("span", { className: "text" }, n.text_download)
                  ),
                  (0, c.tZ)(
                    "div",
                    { css: an },
                    (0, c.tZ)(
                      "label",
                      null,
                      (0, c.tZ)("span", { className: "text" }, "WIDTH:")
                    ),
                    (0, c.tZ)(
                      "select",
                      {
                        onChange: n.magnificationChangeHandler,
                        value: n.current_mag,
                      },
                      [1, 2, 3].map(function (n, a) {
                        return (0,
                        c.tZ)("option", { key: a, value: n }, u.r.size.imagingBaseWidth * n, " px");
                      })
                    )
                  )
                )
              )
            )
          );
        }),
        q = (0, c.iv)(
          "display:grid;border:1px solid ",
          u.r.color.border,
          ";background-color:",
          u.r.color.secondary,
          ";padding:",
          u.r.layout.margin,
          "px;",
          "",
          ""
        ),
        Q = (0, c.iv)(
          "background-color:",
          u.r.color.border,
          ";padding:",
          u.r.layout.margin / 4,
          "px;",
          "",
          ""
        ),
        $ = (0, c.iv)(
          "background-color:",
          u.r.color.base,
          ";&:not(:last-of-type){margin-bottom:",
          u.r.layout.margin / 4,
          "px;}",
          "",
          ""
        ),
        nn = (0, c.iv)(
          "color:",
          u.r.color.accent,
          ";font-size:",
          u.r.fontSize.large,
          "px;padding:",
          u.r.layout.margin / 2,
          "px;border-bottom:1px dashed ",
          u.r.color.border,
          ";",
          "",
          ""
        ),
        an = (0, c.iv)(
          "display:flex;align-items:center;justify-content:flex-end;padding:",
          u.r.layout.margin / 2,
          "px;text-align:right;>select{font-size:",
          u.r.fontSize.mediumPlus,
          "px;}",
          "",
          ""
        ),
        en = function () {
          var n = i.Zl(s.kL),
            a = i.Zl(s.D7),
            e = i.Zl(s._D),
            t = i.Zl(s.g6),
            o = (0, h.vN)("clear_all_messages"),
            r = (0, h.vN)("notification"),
            l = function () {
              a({ dialog: "", open: !1 });
            };
          return {
            text_clear_all_messages: o,
            text_notification: r,
            okClickHandler: function () {
              e(!1), n(!0), t(""), l();
            },
            closeHandler: l,
          };
        },
        tn = e(4730),
        on = function () {
          return { text_ok: (0, h.vN)("ok"), text_cancel: (0, h.vN)("cancel") };
        },
        rn = ["children", "headerText", "bodyText", "okHandler"],
        sn = t.memo(function (n) {
          n.children;
          var a = n.headerText,
            e = n.bodyText,
            t = n.okHandler,
            o = (0, tn.Z)(n, rn),
            r = on();
          return (0,
          c.tZ)(F, { backgroundColor: n.backgroundColor }, (0, c.tZ)(Y, o, a), (0, c.tZ)("div", { css: hn }, (0, c.tZ)("span", { className: "text" }, e)), (0, c.tZ)("footer", { css: ln }, (0, c.tZ)("button", { type: "button", onClick: n.closeHandler }, (0, c.tZ)("span", { className: "text" }, r.text_cancel)), (0, c.tZ)("button", { type: "button", onClick: t }, (0, c.tZ)("span", { className: "text" }, r.text_ok))));
        }),
        hn = (0, c.iv)(
          "display:flex;justify-content:center;align-items:center;min-height:10.0em;padding:",
          u.r.layout.margin,
          "px;>span{color:",
          u.r.color.accent,
          ";font-size:",
          u.r.fontSize.medium,
          "px;font-weight:bold;}",
          "",
          ""
        ),
        ln = (0, c.iv)(
          "display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:1fr;grid-column-gap:",
          u.r.layout.margin / 2,
          "px;grid-row-gap:",
          u.r.layout.margin / 2,
          "px;padding:",
          u.r.layout.margin,
          "px;>button{display:flex;justify-content:center;align-items:center;background-color:",
          u.r.color.base,
          ";border:1px solid ",
          u.r.color.border,
          ";border-radius:5px;padding:",
          u.r.layout.margin,
          "px;margin:1px 0;transform:skew(-11.25deg);outline:none;transition:transform 50ms ease;&:focus-visible{background-color:",
          u.r.color.primary,
          ";border:2px solid ",
          u.r.color.outline,
          ";box-shadow:2px 2px 3px rgba(0, 0, 0, 0.5);margin:0;>span{color:",
          u.r.color.base,
          ";}}&:hover{background-color:",
          u.r.color.primary,
          ";border-color:",
          u.r.color.primary,
          ";box-shadow:2px 2px 3px rgba(0, 0, 0, 0.5);>span{color:",
          u.r.color.base,
          ";}}&:active{transform:skew(-11.25deg) scale(0.95);}>span{width:fit-content;height:fit-content;color:",
          u.r.color.accent,
          ";font-size:",
          u.r.fontSize.large,
          "px;font-weight:bold;transform:skew(11.25deg) rotate(0.05deg);}}@media screen and (max-width: ",
          u.r.layout.minimumBreakpointWidth,
          "px){grid-template-columns:1fr;grid-template-rows:repeat(2, 1fr);}",
          "",
          ""
        ),
        cn = t.memo(function () {
          var n = en();
          return (0,
          c.tZ)(sn, { color: u.r.color.accent, backgroundColor: u.r.color.base, fontSize: "".concat(u.r.fontSize.large), justify: "center", underBarColor: u.r.color.primary, borderColor: u.r.color.border, headerText: n.text_notification, closeHandler: n.closeHandler, bodyText: n.text_clear_all_messages, okHandler: n.okClickHandler });
        }),
        un = e(8456),
        mn = e.n(un),
        dn = function () {
          var n = i.Zl(s.D7),
            a = t.useState(""),
            e = (0, r.Z)(a, 2),
            o = e[0],
            l = e[1],
            c = (0, h.vN)("copyright_notice");
          t.useEffect(function () {
            (0, m.Z)(
              g().mark(function n() {
                var a;
                return g().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), fn();
                      case 2:
                        (a = n.sent), l(a);
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          }, []);
          return {
            text_Copyright: c,
            license: o,
            closeClickHandler: function () {
              n({ dialog: "", open: !1 });
            },
          };
        },
        fn = (function () {
          var n = (0, m.Z)(
            g().mark(function n() {
              return g().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return n.abrupt(
                        "return",
                        e
                          .e(669)
                          .then(e.bind(e, 6669))
                          .then(function (n) {
                            return n.default;
                          })
                          .catch(function (n) {
                            return console.error(n);
                          })
                      );
                    case 1:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        gn = t.memo(function () {
          var n = dn();
          return (0,
          c.tZ)(F, { backgroundColor: u.r.color.secondary, localeFont: !0 }, (0, c.tZ)(Y, { color: u.r.color.accent, backgroundColor: u.r.color.secondary, fontSize: "".concat(u.r.fontSize.large), justify: "center", underBarColor: u.r.color.primary, borderColor: u.r.color.border, closeHandler: n.closeClickHandler }, n.text_Copyright), (0, c.tZ)("div", { css: kn }, (0, c.tZ)("div", { css: _n }, (0, c.tZ)(mn(), { skipHtml: !0 }, n.license))));
        }),
        kn = (0, c.iv)(
          "padding:",
          u.r.layout.margin,
          "px;overflow-x:hidden;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}",
          "",
          ""
        ),
        _n = (0, c.iv)(
          "white-space:pre-wrap;word-wrap:break-word;h1,h2{font-weight:bold;margin-bottom:",
          u.r.layout.margin,
          "px;}li{margin-bottom:",
          u.r.layout.margin,
          "px;}ol{list-style:decimal;margin-left:",
          1.5 * u.r.layout.margin,
          "px;margin-top:",
          u.r.layout.margin,
          "px;}>p{margin-bottom:",
          u.r.layout.margin,
          "px;}",
          "",
          ""
        ),
        zn = function () {
          var n = i.Zl(s.D7);
          return {
            contributors: pn(),
            closeClickHandler: function () {
              n({ dialog: "", open: !1 });
            },
          };
        },
        pn = function () {
          return e(6229);
        },
        yn = t.memo(function () {
          var n = zn();
          return (0, c.tZ)(
            F,
            { backgroundColor: u.r.color.secondary, localeFont: !0 },
            (0, c.tZ)(
              Y,
              {
                color: u.r.color.accent,
                backgroundColor: u.r.color.secondary,
                fontSize: "".concat(u.r.fontSize.large),
                justify: "center",
                underBarColor: u.r.color.primary,
                borderColor: u.r.color.border,
                closeHandler: n.closeClickHandler,
              },
              "GitHub"
            ),
            (0, c.tZ)(
              "div",
              { css: bn },
              (0, c.tZ)("h2", null, "Contributors"),
              (0, c.tZ)(
                "div",
                { css: jn },
                (0, c.tZ)(
                  "ul",
                  null,
                  n.contributors.map(function (n, a) {
                    return (0,
                    c.tZ)("li", { key: a }, (0, c.tZ)("a", { href: n.html_url, target: "_blank" }, (0, c.tZ)("img", { src: n.avatar_url }), (0, c.tZ)("span", { className: "text" }, n.login)));
                  })
                )
              )
            )
          );
        }),
        bn = (0, c.iv)(
          "display:flex;flex-direction:column;padding:",
          u.r.layout.margin,
          "px;overflow:hidden;h2{font-size:",
          u.r.fontSize.extraLarge,
          "px;font-weight:bold;margin-bottom:",
          u.r.layout.margin,
          "px;}",
          "",
          ""
        ),
        jn = (0, c.iv)(
          "overflow-x:hidden;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}>ul{width:100%;li{padding:",
          u.r.layout.margin / 2,
          "px;&:not(:last-of-type){border-bottom:2px solid ",
          u.r.color.border,
          ";}&:hover{background-color:",
          u.r.color.secondaryDark,
          ";}}a{display:grid;grid-template-columns:",
          u.r.size.small,
          "px max-content;grid-column-gap:",
          u.r.layout.margin / 2,
          "px;align-items:center;text-decoration:none;&,&:link,&:visited &:hover,&:active{color:",
          u.r.color.textBlack,
          ";}img{width:100%;height:auto;clip-path:circle(",
          u.r.size.small / 2,
          "px at ",
          u.r.size.small / 2,
          "px ",
          u.r.size.small / 2,
          "px);}span{font-size:",
          u.r.fontSize.large,
          "px;font-weight:bold;}}}",
          "",
          ""
        ),
        Sn = e(6864),
        vn = e(6037),
        wn = function () {
          var n = i.Zl(s.D7),
            a = i.sJ(s.Qy),
            e = t.useState([]),
            o = (0, r.Z)(e, 2),
            l = o[0],
            c = o[1],
            u = t.useState(0),
            d = (0, r.Z)(u, 2),
            f = d[0],
            k = d[1],
            _ = (0, h.vN)("help"),
            z = (0, vn.useSwipeable)({
              onSwipedLeft: function () {
                f + 1 > l.length - 1 ? k(0) : k(f + 1);
              },
              onSwipedRight: function () {
                k(f - 1 < 0 ? l.length - 1 : f - 1);
              },
              trackMouse: !0,
            });
          return (
            t.useEffect(function () {
              (0, m.Z)(
                g().mark(function n() {
                  var e;
                  return g().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), xn(a.code);
                        case 2:
                          (e = n.sent), c(e);
                        case 4:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            }, []),
            {
              text_help: _,
              helpMessages: l,
              helpIndex: f,
              closeClickHandler: function () {
                n({ dialog: "", open: !1 });
              },
              indicatorClickHandler: function (n) {
                k(n);
              },
              swipeHandler: z,
            }
          );
        },
        xn = (function () {
          var n = (0, m.Z)(
            g().mark(function n(a) {
              var t;
              return g().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = (0, h.Vi)(a)),
                        n.abrupt(
                          "return",
                          e(3708)("./help_".concat(t, ".yaml"))
                            .then(function (n) {
                              return n.default;
                            })
                            .catch(function (n) {
                              return console.error(n);
                            })
                        )
                      );
                    case 2:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
          return function (a) {
            return n.apply(this, arguments);
          };
        })();
      var Cn = t.memo(function () {
          var n = wn();
          return (0, c.tZ)(
            F,
            { backgroundColor: u.r.color.secondary, localeFont: !0 },
            (0, c.tZ)(
              Y,
              {
                color: u.r.color.accent,
                backgroundColor: u.r.color.secondary,
                fontSize: "".concat(u.r.fontSize.large),
                justify: "center",
                underBarColor: u.r.color.primary,
                borderColor: u.r.color.border,
                closeHandler: n.closeClickHandler,
              },
              n.text_help
            ),
            (0, c.tZ)(
              "div",
              (0, Sn.Z)({ css: Zn }, n.swipeHandler),
              (0, c.tZ)(
                "div",
                { css: Mn },
                n.helpMessages.map(function (a, e) {
                  return (0,
                  c.tZ)("div", { css: An(n.helpIndex), key: e }, (0, c.tZ)("div", { css: En }, (0, c.tZ)("h3", null, (0, c.tZ)("span", { className: "text" }, a.title)), (0, c.tZ)("div", null, (0, c.tZ)("span", { className: "text" }, a.body))));
                })
              )
            ),
            (0, c.tZ)(
              "footer",
              null,
              (0, c.tZ)(
                "ul",
                { css: Hn(n.helpMessages.length) },
                n.helpMessages.map(function (a, e) {
                  return (0, c.tZ)(
                    "li",
                    { key: e, css: Tn(n.helpIndex === e) },
                    (0, c.tZ)("button", {
                      type: "button",
                      onClick: function () {
                        n.indicatorClickHandler(e);
                      },
                    })
                  );
                })
              )
            )
          );
        }),
        Zn = (0, c.iv)(
          "flex-grow:1;padding:",
          u.r.layout.margin,
          "px;overflow:hidden;",
          "",
          ""
        ),
        Mn = {
          name: "1463fv9",
          styles:
            "display:flex;width:100%;height:100%;border-radius:10px;overflow:hidden",
        },
        An = function (n) {
          return (0, c.iv)(
            "min-width:100%;height:100%;background-color:",
            u.r.color.blueLight,
            ";padding:",
            u.r.layout.margin,
            "px;transition:transform 100ms ease;transform:translateX(calc(-100% * ",
            n,
            "));overflow-x:hidden;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}",
            "",
            ""
          );
        },
        En = (0, c.iv)(
          "line-height:",
          u.r.fontSize.large,
          "px;h3{margin-bottom:",
          u.r.layout.margin,
          "px;>span{color:",
          u.r.color.base,
          ";font-size:",
          u.r.fontSize.mediumPlus,
          "px;font-weight:bold;}}div{>span{color:",
          u.r.color.base,
          ";font-size:",
          u.r.fontSize.medium,
          "px;font-weight:bold;white-space:pre-wrap;}}span{text-shadow:1px 1px 2px rgba(0, 0, 0, 0.5);}",
          "",
          ""
        ),
        Hn = function (n) {
          return (0, c.iv)(
            "flex-shrink:0;display:grid;grid-template-columns:repeat(",
            n,
            ", 1fr);grid-template-rows:1fr;justify-items:center;align-items:center;padding:",
            u.r.layout.margin,
            "px;border-top:1px solid ",
            u.r.color.border,
            ";",
            "",
            ""
          );
        },
        Tn = function (n) {
          return (0, c.iv)(
            "display:flex;list-style:none;width:fit-content;height:fit-content;button{width:",
            u.r.size.xxxSmall,
            "px;height:",
            u.r.size.xxxSmall,
            "px;background-color:",
            u.r.color.accent,
            ";border:2px solid transparent;border-radius:50%;outline:none;",
            n && (0, c.iv)("background-color:", u.r.color.primary, ";", "", ""),
            " &:focus-visible{border-color:",
            u.r.color.outline,
            ";}}",
            "",
            ""
          );
        },
        Nn = e(381),
        Dn = e.n(Nn),
        In = function () {
          var n = i.Zl(s.D7),
            a = i.Zl(s.NM),
            e = i.Zl(s.VI),
            o = i.sJ(s.Qy),
            l = t.useState([]),
            c = (0, r.Z)(l, 2),
            u = c[0],
            d = c[1],
            f = (0, h.vN)("news");
          Dn().locale(o.code);
          return (
            t.useEffect(function () {
              (0, m.Z)(
                g().mark(function n() {
                  var t;
                  return g().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), On(o.code);
                        case 2:
                          return (
                            (n.next = 4),
                            n.sent.map(function (n) {
                              return {
                                body: n.body,
                                date: n.date.replace(/\//g, "-"),
                                title: n.title,
                              };
                            })
                          );
                        case 4:
                          (t = n.sent),
                            d(t.slice().reverse()),
                            a(t[t.length - 1].date),
                            e(!1);
                        case 8:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            }, []),
            {
              text_news: f,
              newsMessages: u,
              closeClickHandler: function () {
                n({ dialog: "", open: !1 });
              },
            }
          );
        },
        On = (function () {
          var n = (0, m.Z)(
            g().mark(function n(a) {
              var t;
              return g().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = (0, h.Vi)(a)),
                        n.abrupt(
                          "return",
                          e(9488)("./news_".concat(t, ".yaml"))
                            .then(function (n) {
                              return n.default;
                            })
                            .catch(function (n) {
                              return console.error(n);
                            })
                        )
                      );
                    case 2:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
          return function (a) {
            return n.apply(this, arguments);
          };
        })(),
        Kn = t.memo(function () {
          var n = In();
          return (0, c.tZ)(
            F,
            { backgroundColor: u.r.color.secondary, localeFont: !0 },
            (0, c.tZ)(
              Y,
              {
                color: u.r.color.accent,
                backgroundColor: u.r.color.secondary,
                fontSize: "".concat(u.r.fontSize.large),
                justify: "center",
                underBarColor: u.r.color.primary,
                borderColor: u.r.color.border,
                closeHandler: n.closeClickHandler,
              },
              n.text_news
            ),
            (0, c.tZ)(
              "div",
              { css: Fn },
              (0, c.tZ)(
                "ul",
                { css: Rn },
                n.newsMessages.map(function (n, a) {
                  return (0,
                  c.tZ)("li", { key: a }, (0, c.tZ)("details", null, (0, c.tZ)("summary", null, (0, c.tZ)("time", { dateTime: n.date }, (0, c.tZ)("span", { className: "text" }, Dn().parseZone(n.date).format("LLLL"))), (0, c.tZ)("span", { className: "text" }, n.title)), (0, c.tZ)("div", { css: Ln }, (0, c.tZ)("span", { className: "text" }, n.body))));
                })
              )
            )
          );
        }),
        Fn = (0, c.iv)(
          "padding:",
          u.r.layout.margin,
          "px;flex-grow:1;overflow-x:hidden;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}",
          "",
          ""
        ),
        Rn = (0, c.iv)(
          "li{padding:",
          u.r.layout.margin,
          "px 0;}li:not(:last-of-type){border-bottom:1px solid ",
          u.r.color.border,
          ";}summary{display:flex;flex-direction:column;cursor:pointer;time{margin-bottom:",
          u.r.layout.margin / 2,
          "px;}>span{color:",
          u.r.color.accent,
          ";font-size:",
          u.r.fontSize.large,
          "px;font-weight:bold;}}",
          "",
          ""
        ),
        Ln = (0, c.iv)(
          "position:relative;margin-top:",
          u.r.layout.margin,
          "px;padding-left:",
          u.r.layout.margin,
          'px;&:before{display:block;content:"";position:absolute;top:0;left:0;width:4px;height:100%;background-color:',
          u.r.color.primary,
          ";}span{white-space:pre-wrap;line-height:",
          u.r.size.xxSmall,
          "px;}",
          "",
          ""
        ),
        Pn = function () {
          var n = i.Zl(s.D7),
            a = i.FV(s.Ki),
            e = (0, r.Z)(a, 2),
            o = e[0],
            l = e[1],
            c = t.useState(""),
            u = (0, r.Z)(c, 2),
            m = u[0],
            d = u[1],
            f = (0, h.vN)("sort"),
            g = (0, h.vN)("ok"),
            _ = [
              { key: k.Y7.FIRST_NAME, text: (0, h.vN)(k.Y7.FIRST_NAME) },
              { key: k.Y7.SCHOOL, text: (0, h.vN)(k.Y7.SCHOOL) },
              { key: k.Y7.CLUB, text: (0, h.vN)(k.Y7.CLUB) },
            ],
            z = function () {
              n({ dialog: "", open: !1 });
            };
          return (
            t.useEffect(function () {
              0 !== Object.keys(o).length && d(o.key);
            }, []),
            {
              text_sort: f,
              text_ok: g,
              sortKeys: _,
              current_key: m,
              closeClickHandler: z,
              sortKeyChangeHandler: function (n) {
                d(n.currentTarget.id);
              },
              okClickHandler: function () {
                l({ key: m, order: o.order }), z();
              },
            }
          );
        },
        Bn = t.memo(function () {
          var n = Pn();
          return (0, c.tZ)(
            F,
            null,
            (0, c.tZ)(
              Y,
              {
                color: u.r.color.accent,
                backgroundColor: u.r.color.base,
                fontSize: "".concat(u.r.fontSize.large),
                justify: "left",
                borderColor: u.r.color.border,
                closeHandler: n.closeClickHandler,
              },
              n.text_sort
            ),
            (0, c.tZ)(
              "div",
              { css: Gn },
              n.sortKeys.map(function (a, e) {
                return (0,
                c.tZ)("div", { css: Un, key: e }, (0, c.tZ)("input", { type: "checkbox", name: "sortkey", id: a.key, value: a.key, checked: n.current_key === a.key, onChange: n.sortKeyChangeHandler }), (0, c.tZ)("label", { htmlFor: a.key }, (0, c.tZ)("span", { className: "text" }, a.text)));
              })
            ),
            (0, c.tZ)(
              "footer",
              { css: Yn },
              (0, c.tZ)(
                "button",
                { type: "button", onClick: n.okClickHandler },
                (0, c.tZ)("span", { className: "text" }, n.text_ok)
              )
            )
          );
        }),
        Gn = (0, c.iv)(
          "display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:1fr;grid-column-gap:",
          u.r.layout.margin / 2,
          "px;grid-row-gap:",
          u.r.layout.margin / 2,
          "px;background-color:",
          u.r.color.base,
          ";padding:",
          u.r.layout.margin,
          "px;border-bottom:1px solid ",
          u.r.color.border,
          ";@media screen and (max-width: ",
          u.r.layout.minimumBreakpointWidth,
          "px){grid-template-columns:1fr;grid-template-rows:repeat(3, 1fr);}",
          "",
          ""
        ),
        Un = (0, c.iv)(
          'position:relative;width:100%;height:100%;input[type="checkbox"]{opacity:0.0;appearance:none;position:absolute;&:checked+label{color:',
          u.r.color.base,
          ";background-color:",
          u.r.color.primary,
          ";border-color:",
          u.r.color.primary,
          ";box-shadow:2px 2px 3px rgba(0, 0, 0, 0.25);}&:focus-visible+label{border:2px solid ",
          u.r.color.outline,
          ";}}>label{display:flex;justify-content:center;align-items:center;width:100%;height:100%;border:2px solid ",
          u.r.color.border,
          ";border-radius:5px;cursor:pointer;padding:",
          u.r.layout.margin,
          "px ",
          u.r.layout.margin / 2,
          "px;transition:transform 50ms ease;&:active{transform:scale(0.95);}>span{font-size:",
          u.r.fontSize.large,
          "px;}}",
          "",
          ""
        ),
        Yn = (0, c.iv)(
          "background-color:",
          u.r.color.base,
          ";padding:",
          u.r.layout.margin,
          "px;>button{background-color:transparent;border:1px solid ",
          u.r.color.border,
          ";border-radius:5px;padding:",
          u.r.layout.margin / 2,
          "px ",
          u.r.layout.margin,
          "px;margin:1px;width:100%;height:100%;box-shadow:2px 2px 3px rgba(0, 0, 0, 0.25);transition:transform 50ms ease;&:active{transform:scale(0.95);}>span{color:",
          u.r.color.accent,
          ";font-size:",
          u.r.fontSize.large,
          "px;font-weight:bold;font-family:",
          u.r.fontFamily.system,
          ";}}",
          "",
          ""
        ),
        Jn = function () {
          var n = i.sJ(s.Qy),
            a = i.Zl(s.D7),
            e = i.sJ(s.mP),
            t = i.sJ(s.oK),
            o = i.Zl(s.z$),
            r = (0, h.vN)("stamp"),
            l = v({
              code: n.code,
              pageCnt: u.r.count.stampPage,
              stampCnt: u.r.count.stampCount,
            }),
            c = function () {
              a({ dialog: "", open: !1 });
            };
          return {
            text_stamp: r,
            stamps: l,
            closeClickHandler: c,
            stampClickHandler: function (n) {
              var a = {
                sender: e,
                character: t,
                avatar: !0,
                messageType: k.C7.STAMP,
                body: [l[n]],
              };
              o(a), c();
            },
          };
        },
        Wn = t.memo(function () {
          var n = Jn();
          return (0, c.tZ)(
            F,
            { backgroundColor: u.r.color.secondary },
            (0, c.tZ)(
              Y,
              {
                color: u.r.color.accent,
                backgroundColor: u.r.color.secondary,
                fontSize: "".concat(u.r.fontSize.large),
                justify: "center",
                underBarColor: u.r.color.primary,
                borderColor: u.r.color.border,
                closeHandler: n.closeClickHandler,
              },
              n.text_stamp
            ),
            (0, c.tZ)(
              "div",
              { css: Vn },
              (0, c.tZ)(
                "div",
                { css: Xn },
                n.stamps.map(function (a, e) {
                  return (0, c.tZ)(
                    "button",
                    {
                      type: "button",
                      key: e,
                      onClick: function () {
                        n.stampClickHandler(e);
                      },
                    },
                    (0, c.tZ)("img", { src: a })
                  );
                })
              )
            )
          );
        }),
        Vn = (0, c.iv)(
          "padding:",
          u.r.layout.margin,
          "px;overflow-x:hidden;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}",
          "",
          ""
        ),
        Xn = (0, c.iv)(
          "display:grid;grid-template-columns:repeat(4, 1fr);grid-column-gap:",
          u.r.layout.margin / 2,
          "px;grid-row-gap:",
          u.r.layout.margin / 2,
          "px;padding:",
          u.r.layout.margin / 2,
          "px;background-color:",
          u.r.color.secondaryDark,
          ";button{width:100%;border:2px solid ",
          u.r.color.border,
          ";border-radius:10px;background-color:",
          u.r.color.base,
          ";overflow:hidden;outline:none;transition:transform 50ms ease;&:focus-visible{border-color:",
          u.r.color.outline,
          ";}&:active{transform:scale(0.95);}>img{width:100%;height:auto;}}@media screen and (max-width: ",
          u.r.layout.minimumBreakpointWidth,
          "px){grid-template-columns:repeat(3, 1fr);}",
          "",
          ""
        ),
        qn = function () {
          var n = i.FV(s.y9),
            a = (0, r.Z)(n, 2),
            e = a[0],
            t = a[1],
            o = i.Zl(s.D7);
          return {
            headerText: (0, h.vN)(Qn(e)),
            closeHandler: function () {
              t(""), o({ dialog: "", open: !1 });
            },
          };
        },
        Qn = function (n) {
          return n === k.yM.KIZUNA ? "kizuna_event" : "";
        },
        $n = t.memo(function () {
          var n = qn();
          return (0,
          c.tZ)(F, { backgroundColor: u.r.color.secondary }, (0, c.tZ)(Y, { color: u.r.color.accent, backgroundColor: u.r.color.secondary, fontSize: "".concat(u.r.fontSize.large), justify: "center", underBarColor: u.r.color.primary, borderColor: u.r.color.border, closeHandler: n.closeHandler }, n.headerText));
        }),
        na = function () {
          var n = i.Zl(s.D7),
            a = t.useState(""),
            e = (0, r.Z)(a, 2),
            o = e[0],
            l = e[1],
            c = (0, h.vN)("terms_of_service");
          t.useEffect(function () {
            (0, m.Z)(
              g().mark(function n() {
                var a;
                return g().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), aa();
                      case 2:
                        (a = n.sent), l(a);
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          }, []);
          return {
            text_tos: c,
            termsOfService: o,
            closeClickHandler: function () {
              n({ dialog: "", open: !1 });
            },
          };
        },
        aa = (function () {
          var n = (0, m.Z)(
            g().mark(function n() {
              var a,
                t = arguments;
              return g().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (a = t.length > 0 && void 0 !== t[0] ? t[0] : "jp"),
                        n.abrupt(
                          "return",
                          e(1360)("./terms_of_service_".concat(a, ".md"))
                            .then(function (n) {
                              return n.default;
                            })
                            .catch(function (n) {
                              return console.error(n);
                            })
                        )
                      );
                    case 2:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        ea = t.memo(function () {
          var n = na();
          return (0,
          c.tZ)(F, { backgroundColor: u.r.color.secondary, localeFont: !0 }, (0, c.tZ)(Y, { color: u.r.color.accent, backgroundColor: u.r.color.secondary, fontSize: "".concat(u.r.fontSize.large), justify: "center", underBarColor: u.r.color.primary, borderColor: u.r.color.border, closeHandler: n.closeClickHandler }, n.text_tos), (0, c.tZ)("div", { css: ta }, (0, c.tZ)("div", { css: oa }, (0, c.tZ)(mn(), { skipHtml: !0 }, n.termsOfService))));
        }),
        ta = (0, c.iv)(
          "padding:",
          u.r.layout.margin,
          "px;overflow-x:hidden;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}",
          "",
          ""
        ),
        oa = (0, c.iv)(
          "white-space:pre-wrap;word-wrap:break-word;h1,h2{font-weight:bold;}ol{display:flex;flex-direction:column;justify-content:flex-start;list-style:decimal;margin-left:",
          1.5 * u.r.layout.margin,
          "px;}",
          "",
          ""
        ),
        ra = function () {
          var n = M();
          return (0, c.tZ)(
            t.Fragment,
            null,
            n.openDialog.dialog === k.My.SETTING &&
              n.openDialog.open &&
              (0, c.tZ)(X, null),
            n.openDialog.dialog === k.My.SORT &&
              n.openDialog.open &&
              (0, c.tZ)(Bn, null),
            n.openDialog.dialog === k.My.CLEAR &&
              n.openDialog.open &&
              (0, c.tZ)(cn, null),
            n.openDialog.dialog === k.My.HELP &&
              n.openDialog.open &&
              (0, c.tZ)(Cn, null),
            n.openDialog.dialog === k.My.NEWS &&
              n.openDialog.open &&
              (0, c.tZ)(Kn, null),
            n.openDialog.dialog === k.My.TERMS_OF_SERVICE &&
              n.openDialog.open &&
              (0, c.tZ)(ea, null),
            n.openDialog.dialog === k.My.COPYRIGHT &&
              n.openDialog.open &&
              (0, c.tZ)(gn, null),
            n.openDialog.dialog === k.My.SYSTEM_MESSAGE &&
              n.openDialog.open &&
              (0, c.tZ)($n, null),
            n.openDialog.dialog === k.My.STAMP &&
              n.openDialog &&
              (0, c.tZ)(Wn, null),
            n.openDialog.dialog === k.My.GITHUB &&
              n.openDialog &&
              (0, c.tZ)(yn, null)
          );
        },
        ia = t.lazy(function () {
          return e.e(73).then(e.bind(e, 9073));
        }),
        sa = t.lazy(function () {
          return e.e(28).then(e.bind(e, 4028));
        }),
        ha = function (n) {
          var a = n.children,
            e = l();
          return (0, c.tZ)(
            t.Fragment,
            null,
            (0, c.tZ)(
              "div",
              { css: la(e.font, e.height) },
              (0, c.tZ)(
                o.default,
                null,
                (0, c.tZ)("meta", { charSet: "utf-8" }),
                (0, c.tZ)("meta", {
                  name: "viewport",
                  content: "initial-scale=1.0, width=device-width",
                }),
                (0, c.tZ)("title", null, "YuzuTalk")
              ),
              (0, c.tZ)(
                "div",
                { css: ca },
                (0, c.tZ)(
                  t.Suspense,
                  { fallback: (0, c.tZ)("div", { css: ua }) },
                  !e.coverAnimationEnd && (0, c.tZ)(sa, null),
                  (0, c.tZ)(ia, null),
                  a
                )
              ),
              (0, c.tZ)(ra, null)
            )
          );
        },
        la = function (n, a) {
          return (0, c.iv)(
            "@font-face{font-family:",
            n.fontFamily,
            ";src:url(",
            n.src,
            ");font-weight:",
            n.fontWeight,
            ";font-style:",
            n.fontStyle,
            ";}*{font-family:",
            n.fontFamily,
            ",sans-serif;}width:100vw;height:",
            a,
            "px;",
            "",
            ""
          );
        },
        ca = (0, c.iv)(
          "position:relative;display:grid;grid-template-columns:1fr;grid-template-rows:",
          u.r.size.medium,
          'px 1fr;grid-template-areas:"header" "main";max-width:',
          u.r.layout.windowMaxWidth,
          "px;width:100%;height:100%;margin:auto;overflow:hidden;@media screen and (min-width: ",
          u.r.layout.windowMaxWidth,
          "px){border-left:1px solid ",
          u.r.color.border,
          ";border-right:1px solid ",
          u.r.color.border,
          ";border-radius:10px;overflow:hidden;}",
          "",
          ""
        ),
        ua = (0, c.iv)(
          "position:fixed;top:0;right:0;bottom:0;left:0;max-width:",
          u.r.layout.windowMaxWidth,
          "px;width:100%;height:100%;margin:auto;background-color:",
          u.r.color.primary,
          ";",
          "",
          ""
        );
    },
    5871: function (n, a, e) {
      "use strict";
      e.d(a, {
        gM: function () {
          return l;
        },
        pD: function () {
          return c;
        },
        J9: function () {
          return u;
        },
        oJ: function () {
          return m;
        },
        uH: function () {
          return d;
        },
        lA: function () {
          return k;
        },
      });
      var t = e(7812),
        o = e(9499),
        r = e(6835),
        i = e(789);
      function s(n, a) {
        var e = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(n);
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(n, a).enumerable;
            })),
            e.push.apply(e, t);
        }
        return e;
      }
      function h(n) {
        for (var a = 1; a < arguments.length; a++) {
          var e = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? s(Object(e), !0).forEach(function (a) {
                (0, o.Z)(n, a, e[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
            : s(Object(e)).forEach(function (a) {
                Object.defineProperty(
                  n,
                  a,
                  Object.getOwnPropertyDescriptor(e, a)
                );
              });
        }
        return n;
      }
      var l = function (n, a) {
          var e = f(n.character, n.sender);
          a(function (a) {
            if (
              a.length > 0 &&
              n.messageType === i.C7.REPLY &&
              a[a.length - 1].messageType === i.C7.REPLY
            ) {
              var o = _(a, a.length - 1),
                s = (0, r.Z)(o, 3),
                l = s[0],
                c = s[1],
                u = s[2],
                m = c.body.concat(""),
                d = h(h({}, c), {}, { body: m });
              return (0, t.Z)(l.concat(d, u));
            }
            return g(
              [].concat((0, t.Z)(a), [h(h({}, n), {}, { character: e })]),
              a.length
            );
          });
        },
        c = function (n, a) {
          a(function (a) {
            var e = _(a, n),
              o = (0, r.Z)(e, 3),
              i = o[0],
              s = (o[1], o[2]);
            return (0, t.Z)(g(i.concat(s), n));
          });
        },
        u = function (n, a, e) {
          e(function (e) {
            var o = _(e, n),
              i = (0, r.Z)(o, 3),
              s = i[0],
              l = i[1],
              c = i[2],
              u = h(h({}, l), {}, { body: [a] });
            return (0, t.Z)(s.concat(u, c));
          });
        },
        m = function (n, a, e, o) {
          o(function (o) {
            var i = _(o, n),
              s = (0, r.Z)(i, 3),
              l = s[0],
              c = s[1],
              u = s[2],
              m = _(c.body, a),
              d = (0, r.Z)(m, 3),
              f = d[0],
              g = (d[1], d[2]),
              k = h(h({}, c), {}, { body: f.concat(e, g) });
            return (0, t.Z)(l.concat(k, u));
          });
        },
        d = function (n, a, e) {
          e(function (e) {
            var o = _(e, n),
              i = (0, r.Z)(o, 3),
              s = i[0],
              l = i[1],
              c = i[2],
              u = _(l.body, a),
              m = (0, r.Z)(u, 3),
              d = m[0],
              f = (m[1], m[2]),
              g = h(h({}, l), {}, { body: d.concat(f) });
            return (0, t.Z)(s.concat(g, c));
          });
        },
        f = function (n, a) {
          return a === i._n.TEACHER ? {} : n;
        },
        g = function (n, a) {
          var e =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return n.map(function (t, o) {
            if (o !== a) return h({}, t);
            if (0 === Object.keys(t.character).length)
              return h(h({}, t), {}, { avatar: !1 });
            if (t.sender === i._n.SYSTEM)
              return h(h({}, t), {}, { avatar: !1 });
            if (0 === o) return h(h({}, t), {}, { avatar: !0 });
            if (t.messageType === i.C7.IMAGE)
              return h(h({}, t), {}, { avatar: !0 });
            var r = n[o - 1];
            return r.sender === i._n.TEACHER ||
              r.sender === i._n.SYSTEM ||
              r.character.id !== t.character.id ||
              r.messageType === i.C7.IMAGE
              ? h(h({}, t), {}, { avatar: !0 })
              : e
              ? h(h({}, t), {}, { avatar: !t.avatar })
              : r.character.imgIndex !== t.character.imgIndex
              ? h(h({}, t), {}, { avatar: !0 })
              : h(h({}, t), {}, { avatar: !1 });
          });
        },
        k = function (n, a) {
          a(function (a) {
            return (0, t.Z)(g(a, n, !0));
          });
        },
        _ = function (n, a) {
          return [n.slice(0, a), n[a], n.slice(a + 1, n.length)];
        };
    },
    4855: function (n, a, e) {
      "use strict";
      e.d(a, {
        Qy: function () {
          return r;
        },
        fP: function () {
          return i;
        },
        oK: function () {
          return s;
        },
        TL: function () {
          return h;
        },
        mP: function () {
          return l;
        },
        g6: function () {
          return c;
        },
        GL: function () {
          return u;
        },
        U9: function () {
          return m;
        },
        Go: function () {
          return d;
        },
        Xs: function () {
          return f;
        },
        dA: function () {
          return g;
        },
        _D: function () {
          return k;
        },
        c_: function () {
          return _;
        },
        z$: function () {
          return z;
        },
        dq: function () {
          return p;
        },
        D7: function () {
          return y;
        },
        Ki: function () {
          return b;
        },
        MK: function () {
          return j;
        },
        kL: function () {
          return S;
        },
        Bl: function () {
          return v;
        },
        VI: function () {
          return w;
        },
        NM: function () {
          return x;
        },
        WZ: function () {
          return C;
        },
        y9: function () {
          return Z;
        },
      });
      var t = e(2804),
        o = e(789),
        r = (0, t.cn)({
          key: "LocaleState",
          default: {
            code: "ja",
            language: "japanese",
            display: "\u65e5\u672c\u8a9e",
          },
        }),
        i = (0, t.cn)({ key: "CharacterListState", default: [] }),
        s = (0, t.cn)({ key: "SelectCharacterState", default: {} }),
        h = (0, t.cn)({ key: "SwipeState", default: !1 }),
        l = (0, t.cn)({ key: "MessageSenderState", default: o._n.CHARACTER }),
        c = (0, t.cn)({ key: "InputMessageState", default: "" }),
        u = (0, t.cn)({ key: "MessageListState", default: [] }),
        m = (0, t.cn)({ key: "ImageLoadState", default: !1 }),
        d = (0, t.cn)({ key: "OpenMessageControlPanelState", default: !1 }),
        f = (0, t.cn)({ key: "DownloadingState", default: !1 }),
        g = (0, t.cn)({ key: "ImagingMagnificationState", default: 1 }),
        k = (0, t.cn)({ key: "DeleteModeState", default: !1 }),
        _ = (0, t.cn)({ key: "DeleteMessageState", default: -1 }),
        z = (0, t.cn)({ key: "SendMessageState", default: {} }),
        p = (0, t.cn)({ key: "ToggleAvatarState", default: -1 }),
        y = (0, t.cn)({
          key: "OpenDialogState",
          default: { dialog: "", open: !1 },
        }),
        b = (0, t.cn)({
          key: "SortState",
          default: { key: o.Y7.FIRST_NAME, order: o.mX.ASC },
        }),
        j = (0, t.cn)({ key: "FrameCoverAnimationState", default: !1 }),
        S = (0, t.cn)({ key: "ClearAllMessagesState", default: !1 }),
        v =
          ((0, t.cn)({ key: "TweetState", default: !1 }),
          (0, t.cn)({ key: "RenderRefState", default: {} })),
        w = (0, t.cn)({ key: "NewsBadgeState", default: !1 }),
        x = (0, t.cn)({ key: "NewsLatestDateState", default: "" }),
        C = (0, t.cn)({ key: "SearchTextState", default: "" }),
        Z = (0, t.cn)({ key: "SystemMessageTypeState", default: "" });
    },
    1286: function (n, a, e) {
      "use strict";
      e.d(a, {
        r: function () {
          return t;
        },
      });
      var t = {
        color: {
          base: "#FFFFFF",
          primary: "#ffdc42",
          primaryLight: "#FFF3C1",
          secondary: "#F3F7F8",
          secondaryDark: "#DCE5EC",
          accent: "#4C5B70",
          accentDark: "#252E37",
          accentLight: "#68788F",
          textBlack: "#555555",
          textBlackDark: "#444444",
          textGray: "#888888",
          border: "#E7EBEC",
          borderDark: "#d8d8d8",
          blue: "#3493F9",
          blueLight: "#77B7FB",
          blueDark: "#4A8ACA",
          messagePanel: "#f7f7f7",
          messageBox: "#e0e0e0",
          outline: "#ffb342",
          badge: "#ff0000",
          chat: "#fff7e1",
          pink: "#FFEDF1",
          pinkDark: "#FF92A4",
          heart: "#FFD1DB",
        },
        layout: {
          windowMaxWidth: 1440,
          breakpointWidth: 768,
          minimumBreakpointWidth: 359,
          margin: 16,
          maxMessageWidth: 18,
        },
        size: {
          extraLarge: 160,
          large: 128,
          medium: 64,
          small: 48,
          extraSmall: 32,
          xxSmall: 24,
          xxxSmall: 16,
          mag: 0.75,
          imagingBaseWidth: 500,
        },
        fontSize: {
          extraLarge: 24,
          large: 20,
          mediumPlus: 18,
          medium: 16,
          small: 12,
        },
        fontFamily: { system: "'M PLUS Rounded 1c', sans-serif" },
        count: { stampCount: 20, stampPage: 1 },
      };
    },
    789: function (n, a, e) {
      "use strict";
      e.d(a, {
        _n: function () {
          return t;
        },
        C7: function () {
          return o;
        },
        My: function () {
          return r;
        },
        Y7: function () {
          return i;
        },
        mX: function () {
          return s;
        },
        bD: function () {
          return h;
        },
        Uf: function () {
          return l;
        },
        yM: function () {
          return c;
        },
      });
      var t = {
          CHARACTER: "sender_character",
          TEACHER: "sender_teacher",
          SYSTEM: "sender_system",
        },
        o = {
          TEXT: "text",
          IMAGE: "image",
          KIZUNA: "kizuna",
          REPLY: "reply",
          SYSTEM: "system",
          STAMP: "stamp",
        },
        r = {
          SORT: "sort_dialog",
          SETTING: "setting_dialog",
          NEWS: "news_dialog",
          HELP: "help_dialog",
          CONTACT: "contact_dialog",
          CLEAR: "clear_dialog",
          TERMS_OF_SERVICE: "terms_of_service_dialog",
          COPYRIGHT: "copyright_dialog",
          SYSTEM_MESSAGE: "system_message_dialog",
          STAMP: "stamp_dialog",
          GITHUB: "github_dialog",
        },
        i = {
          FIRST_NAME: "name",
          LAST_NAME: "last_name",
          SCHOOL: "school",
          CLUB: "club",
        },
        s = { ASC: "asc", DESC: "desc" },
        h = { LOCAL: "localStorage", SESSION: "sessionStorage" },
        l = {
          LOCALE: "locale",
          SELECT_CHARACTER: "select_character",
          MESSAGE_LIST: "message_list",
          SWIPE: "swipe",
          MESSAGE_SENDER: "message_sender",
          IMAGING_MAGNIFICATION: "imaging_magnification",
          NEWS_LATEST_DATE: "news_latest_date",
        },
        c = { KIZUNA: "kizuna" };
    },
    6229: function (n) {
      "use strict";
      n.exports = JSON.parse(
        '[{"login":"somni","avatar_url":"https://avatars.githubusercontent.com/u/82272900?v=4","html_url":"https://github.com/somnisomni"},{"login":"Kinos","avatar_url":"https://avatars.githubusercontent.com/u/26380261?v=4","html_url":"https://github.com/Sn-Kinos"},{"login":"Shigma","avatar_url":"https://avatars.githubusercontent.com/u/33423008?v=4","html_url":"https://github.com/shigma"},{"login":"wangyw15","avatar_url":"https://avatars.githubusercontent.com/u/18070676?v=4","html_url":"https://github.com/wangyw15"}]'
      );
    },
  },
]);
