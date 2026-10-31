//=============================================================================
// CustomMessageUI.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Personaliza a caixa de diálogo, a caixa do nome, as escolhas e a resolução da tela.
 * @author Você
 *
 * @help
 * ============================================================================
 * CustomMessageUI
 * ============================================================================
 * Permite trocar o visual e a posição de:
 *   - Caixa de diálogo (fundo, largura, altura, posição, margem interna)
 *   - Caixa do nome do personagem (fundo, posição, tamanho)
 *   - Janela de escolhas (fundo, posição esquerda/centro/direita)
 *   - Resolução da tela e área da interface (ex: 720 x 1280)
 *
 * COMO USAR
 * 1. Salve como CustomMessageUI.js em js/plugins/ (o nome precisa ser esse).
 * 2. Coloque as imagens em img/system/.
 * 3. Ative o plugin e configure os parâmetros.
 *
 * IMAGENS DE FUNDO
 * A imagem é ajustada ao tamanho da janela. Existem dois modos:
 *   - Esticar (borda = 0): a imagem inteira é esticada. Bom quando a imagem
 *     tem o mesmo tamanho (ou proporção) da janela.
 *   - Borda fixa (borda > 0): a imagem é dividida em 9 partes. Os cantos
 *     mantêm o tamanho original e só o meio estica. Use isso quando a
 *     janela muda de tamanho (como as escolhas). O valor é a espessura da
 *     borda da imagem em pixels.
 *
 * As imagens só aparecem quando a janela está no modo "Janela" do
 * comando Mostrar Texto / Mostrar Escolhas. Nos modos "Escurecer" e
 * "Transparente", o jogo se comporta como sempre.
 *
 * POSIÇÕES
 * Os campos de "Ajuste X / Y" somam à posição normal. Valores negativos
 * movem para a esquerda / para cima.
 *
 * RESOLUÇÃO
 * Deixe 0 para usar o que está no Banco de Dados (Sistema 2 > Avançado).
 * Se você mudar só a tela, a área da interface acompanha a tela.
 * Ao mudar a resolução, os plugins que usam posições fixas em pixels
 * (como botões do menu inicial) precisam de ajuste.
 *
 * ----------------------------------------------------------------------------
 * TELA
 * ----------------------------------------------------------------------------
 * @param screenWidth
 * @text Largura da tela
 * @desc Em pixels. 0 = usar o valor do Banco de Dados.
 * @type number
 * @min 0
 * @default 0
 *
 * @param screenHeight
 * @text Altura da tela
 * @desc Em pixels. 0 = usar o valor do Banco de Dados.
 * @type number
 * @min 0
 * @default 0
 *
 * @param uiAreaWidth
 * @text Largura da área da interface
 * @desc Área onde as janelas ficam. 0 = igual à tela (se a tela foi alterada) ou o Banco de Dados.
 * @type number
 * @min 0
 * @default 0
 *
 * @param uiAreaHeight
 * @text Altura da área da interface
 * @desc 0 = igual à tela (se a tela foi alterada) ou o Banco de Dados.
 * @type number
 * @min 0
 * @default 0
 *
 * @param msgHeader
 * @text ===== Caixa de diálogo =====
 *
 * @param messageBackground
 * @text Imagem de fundo
 * @desc Imagem em img/system/. Vazio = janela padrão do jogo.
 * @type file
 * @dir img/system/
 * @require 1
 *
 * @param messageSlice
 * @text Borda da imagem (px)
 * @desc 0 = esticar a imagem inteira. Maior que 0 = bordas fixas (9 partes).
 * @type number
 * @min 0
 * @default 0
 *
 * @param messageWidth
 * @text Largura da caixa
 * @desc Em pixels. 0 = largura total da área da interface.
 * @type number
 * @min 0
 * @default 0
 *
 * @param messageHeight
 * @text Altura da caixa
 * @desc Em pixels. 0 = altura padrão (4 linhas).
 * @type number
 * @min 0
 * @default 0
 *
 * @param messageOffsetX
 * @text Ajuste X
 * @desc Move a caixa na horizontal (pixels). A caixa começa centralizada.
 * @type number
 * @min -9999
 * @default 0
 *
 * @param messageOffsetY
 * @text Ajuste Y
 * @desc Move a caixa na vertical (pixels). Soma à posição Topo / Meio / Baixo do evento.
 * @type number
 * @min -9999
 * @default 0
 *
 * @param messagePadding
 * @text Margem interna do texto
 * @desc Distância entre a borda e o texto (pixels). -1 = padrão do jogo.
 * @type number
 * @min -1
 * @default -1
 *
 * @param nameHeader
 * @text ===== Caixa do nome =====
 *
 * @param nameBoxBackground
 * @text Imagem de fundo
 * @desc Imagem em img/system/. Vazio = janela padrão do jogo.
 * @type file
 * @dir img/system/
 * @require 1
 *
 * @param nameBoxSlice
 * @text Borda da imagem (px)
 * @desc 0 = esticar a imagem inteira. Maior que 0 = bordas fixas (9 partes).
 * @type number
 * @min 0
 * @default 0
 *
 * @param nameBoxAlign
 * @text Alinhamento na caixa de diálogo
 * @desc Onde a caixa do nome fica em relação à caixa de diálogo.
 * @type select
 * @option Esquerda
 * @value left
 * @option Centro
 * @value center
 * @option Direita
 * @value right
 * @default left
 *
 * @param nameBoxOffsetX
 * @text Ajuste X
 * @type number
 * @min -9999
 * @default 0
 *
 * @param nameBoxOffsetY
 * @text Ajuste Y
 * @desc Negativo = mais para cima.
 * @type number
 * @min -9999
 * @default 0
 *
 * @param nameBoxMinWidth
 * @text Largura mínima
 * @desc Em pixels. 0 = ajusta ao tamanho do nome.
 * @type number
 * @min 0
 * @default 0
 *
 * @param nameBoxHeight
 * @text Altura
 * @desc Em pixels. 0 = altura padrão. O nome fica centralizado na vertical.
 * @type number
 * @min 0
 * @default 0
 *
 * @param nameBoxCenterText
 * @text Centralizar o nome na caixa
 * @type boolean
 * @on Sim
 * @off Não
 * @default false
 *
 * @param choiceHeader
 * @text ===== Escolhas =====
 *
 * @param choiceBackground
 * @text Imagem de fundo
 * @desc Imagem em img/system/. Vazio = janela padrão do jogo.
 * @type file
 * @dir img/system/
 * @require 1
 *
 * @param choiceSlice
 * @text Borda da imagem (px)
 * @desc Recomendado maior que 0, porque o tamanho das escolhas muda.
 * @type number
 * @min 0
 * @default 0
 *
 * @param choicePosition
 * @text Posição das escolhas
 * @desc "Usar o do evento" respeita a opção Esquerda / Meio / Direita do comando Mostrar Escolhas.
 * @type select
 * @option Usar o do evento
 * @value event
 * @option Esquerda
 * @value left
 * @option Centro
 * @value center
 * @option Direita
 * @value right
 * @default event
 *
 * @param choiceAlignToMessage
 * @text Alinhar com a caixa de diálogo
 * @desc Sim: esquerda/centro/direita são em relação à caixa de diálogo. Não: em relação à tela.
 * @type boolean
 * @on Sim
 * @off Não
 * @default false
 *
 * @param choiceOffsetX
 * @text Ajuste X
 * @type number
 * @min -9999
 * @default 0
 *
 * @param choiceOffsetY
 * @text Ajuste Y
 * @type number
 * @min -9999
 * @default 0
 *
 * @param choiceMinWidth
 * @text Largura mínima
 * @desc Em pixels. 0 = ajusta ao tamanho das escolhas.
 * @type number
 * @min 0
 * @default 0
 *
 * @param choicePadding
 * @text Margem interna
 * @desc Distância entre a borda e as escolhas (pixels). -1 = padrão do jogo.
 * @type number
 * @min -1
 * @default -1
 */

(() => {
    "use strict";

    const pluginName = "CustomMessageUI";
    const params = PluginManager.parameters(pluginName);

    const num = (v, d) => {
        const n = Number(v);
        return (v === undefined || v === "" || Number.isNaN(n)) ? d : n;
    };
    const bool = (v, d) => (v === undefined || v === "" ? d : String(v) === "true");

    //-------------------------------------------------------------------------
    // Parâmetros
    //-------------------------------------------------------------------------

    // Tela
    const screenWidth = num(params.screenWidth, 0);
    const screenHeight = num(params.screenHeight, 0);
    const uiAreaWidth = num(params.uiAreaWidth, 0);
    const uiAreaHeight = num(params.uiAreaHeight, 0);

    // Caixa de diálogo
    const messageBackground = String(params.messageBackground || "");
    const messageSlice = num(params.messageSlice, 0);
    const messageWidth = num(params.messageWidth, 0);
    const messageHeight = num(params.messageHeight, 0);
    const messageOffsetX = num(params.messageOffsetX, 0);
    const messageOffsetY = num(params.messageOffsetY, 0);
    const messagePadding = num(params.messagePadding, -1);

    // Caixa do nome
    const nameBoxBackground = String(params.nameBoxBackground || "");
    const nameBoxSlice = num(params.nameBoxSlice, 0);
    const nameBoxAlign = String(params.nameBoxAlign || "left");
    const nameBoxOffsetX = num(params.nameBoxOffsetX, 0);
    const nameBoxOffsetY = num(params.nameBoxOffsetY, 0);
    const nameBoxMinWidth = num(params.nameBoxMinWidth, 0);
    const nameBoxHeight = num(params.nameBoxHeight, 0);
    const nameBoxCenterText = bool(params.nameBoxCenterText, false);

    // Escolhas
    const choiceBackground = String(params.choiceBackground || "");
    const choiceSlice = num(params.choiceSlice, 0);
    const choicePosition = String(params.choicePosition || "event");
    const choiceAlignToMessage = bool(params.choiceAlignToMessage, false);
    const choiceOffsetX = num(params.choiceOffsetX, 0);
    const choiceOffsetY = num(params.choiceOffsetY, 0);
    const choiceMinWidth = num(params.choiceMinWidth, 0);
    const choicePadding = num(params.choicePadding, -1);

    //-------------------------------------------------------------------------
    // Resolução da tela
    //-------------------------------------------------------------------------

    Scene_Boot.prototype.resizeScreen = function() {
        const width = screenWidth > 0 ? screenWidth : $dataSystem.advanced.screenWidth;
        const height = screenHeight > 0 ? screenHeight : $dataSystem.advanced.screenHeight;
        Graphics.resize(width, height);
        this.adjustBoxSize();
        this.adjustWindow();
    };

    const _Scene_Boot_adjustBoxSize = Scene_Boot.prototype.adjustBoxSize;
    Scene_Boot.prototype.adjustBoxSize = function() {
        _Scene_Boot_adjustBoxSize.call(this);
        const boxMargin = 4;
        const uiWidth = uiAreaWidth > 0 ? uiAreaWidth : screenWidth;
        const uiHeight = uiAreaHeight > 0 ? uiAreaHeight : screenHeight;
        if (uiWidth > 0) {
            Graphics.boxWidth = uiWidth - boxMargin * 2;
        }
        if (uiHeight > 0) {
            Graphics.boxHeight = uiHeight - boxMargin * 2;
        }
    };

    //-------------------------------------------------------------------------
    // Fundo em imagem para janelas
    //-------------------------------------------------------------------------

    function CustomWindowBackground(win, imageName, slice) {
        this._window = win;
        this._source = ImageManager.loadSystem(imageName);
        this._slice = slice;
        this._width = 0;
        this._height = 0;
        this._sprite = new Sprite();
        this._sprite.visible = false;
        // Fica acima do fundo padrão da janela e abaixo do texto.
        if (typeof win.addChildToBack === "function") {
            win.addChildToBack(this._sprite);
        } else {
            win.addChildAt(this._sprite, 0);
        }
    }

    CustomWindowBackground.prototype.setDefaultFrameVisible = function(visible) {
        const container = this._window._container;
        if (container) {
            container.visible = visible;
        }
    };

    CustomWindowBackground.prototype.update = function() {
        const win = this._window;
        const source = this._source;
        const sprite = this._sprite;
        if (!source.isReady()) {
            return;
        }
        // Só no modo "Janela" (0). Escurecer / Transparente seguem o padrão.
        const active = (win._background || 0) === 0 && win.width > 0 && win.height > 0;
        this.setDefaultFrameVisible(!active);
        if (!active || win.openness <= 0) {
            sprite.visible = false;
            return;
        }
        const w = Math.ceil(win.width);
        const h = Math.ceil(win.height);
        if (w !== this._width || h !== this._height) {
            this.rebuild(w, h);
        }
        // Acompanha a animação de abrir / fechar da janela.
        const open = win.openness / 255;
        sprite.scale.y = open;
        sprite.y = (h / 2) * (1 - open);
        sprite.visible = true;
    };

    CustomWindowBackground.prototype.rebuild = function(w, h) {
        const old = this._sprite.bitmap;
        const bitmap = new Bitmap(w, h);
        this.draw(bitmap, w, h);
        this._sprite.bitmap = bitmap;
        this._width = w;
        this._height = h;
        if (old) {
            old.destroy();
        }
    };

    CustomWindowBackground.prototype.draw = function(dest, w, h) {
        const src = this._source;
        const sw = src.width;
        const sh = src.height;
        const m = Math.floor(Math.min(this._slice, sw / 2, sh / 2, w / 2, h / 2));
        if (m <= 0) {
            dest.blt(src, 0, 0, sw, sh, 0, 0, w, h);
            return;
        }
        // Cantos
        dest.blt(src, 0, 0, m, m, 0, 0, m, m);
        dest.blt(src, sw - m, 0, m, m, w - m, 0, m, m);
        dest.blt(src, 0, sh - m, m, m, 0, h - m, m, m);
        dest.blt(src, sw - m, sh - m, m, m, w - m, h - m, m, m);
        // Bordas
        if (sw - 2 * m > 0 && w - 2 * m > 0) {
            dest.blt(src, m, 0, sw - 2 * m, m, m, 0, w - 2 * m, m);
            dest.blt(src, m, sh - m, sw - 2 * m, m, m, h - m, w - 2 * m, m);
        }
        if (sh - 2 * m > 0 && h - 2 * m > 0) {
            dest.blt(src, 0, m, m, sh - 2 * m, 0, m, m, h - 2 * m);
            dest.blt(src, sw - m, m, m, sh - 2 * m, w - m, m, m, h - 2 * m);
        }
        // Centro
        if (sw - 2 * m > 0 && sh - 2 * m > 0 && w - 2 * m > 0 && h - 2 * m > 0) {
            dest.blt(src, m, m, sw - 2 * m, sh - 2 * m, m, m, w - 2 * m, h - 2 * m);
        }
    };

    function attachBackground(windowClass, imageName, slice) {
        if (!imageName) {
            return;
        }
        const _initialize = windowClass.prototype.initialize;
        windowClass.prototype.initialize = function() {
            _initialize.apply(this, arguments);
            this._customBg = new CustomWindowBackground(this, imageName, slice);
        };
        const _update = windowClass.prototype.update;
        windowClass.prototype.update = function() {
            _update.call(this);
            if (this._customBg) {
                this._customBg.update();
            }
        };
    }

    attachBackground(Window_Message, messageBackground, messageSlice);
    attachBackground(Window_NameBox, nameBoxBackground, nameBoxSlice);
    attachBackground(Window_ChoiceList, choiceBackground, choiceSlice);

    //-------------------------------------------------------------------------
    // Caixa de diálogo: tamanho, posição e margem
    //-------------------------------------------------------------------------

    const _Scene_Message_messageWindowRect = Scene_Message.prototype.messageWindowRect;
    Scene_Message.prototype.messageWindowRect = function() {
        const rect = _Scene_Message_messageWindowRect.call(this);
        const ww = messageWidth > 0 ? messageWidth : rect.width;
        let wh = rect.height;
        if (messageHeight > 0) {
            wh = messageHeight;
        } else if (messagePadding >= 0) {
            wh += (messagePadding - $gameSystem.windowPadding()) * 2;
        }
        const wx = (Graphics.boxWidth - ww) / 2 + messageOffsetX;
        return new Rectangle(wx, rect.y, ww, wh);
    };

    const _Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
    Window_Message.prototype.updatePlacement = function() {
        _Window_Message_updatePlacement.call(this);
        this.y += messageOffsetY;
    };

    const _Window_Message_updatePadding = Window_Message.prototype.updatePadding;
    Window_Message.prototype.updatePadding = function() {
        if (messagePadding >= 0) {
            this.padding = messagePadding;
        } else {
            _Window_Message_updatePadding.call(this);
        }
    };

    //-------------------------------------------------------------------------
    // Caixa do nome
    //-------------------------------------------------------------------------

    const _Window_NameBox_windowWidth = Window_NameBox.prototype.windowWidth;
    Window_NameBox.prototype.windowWidth = function() {
        const width = _Window_NameBox_windowWidth.call(this);
        return width > 0 ? Math.max(width, nameBoxMinWidth) : 0;
    };

    const _Window_NameBox_windowHeight = Window_NameBox.prototype.windowHeight;
    Window_NameBox.prototype.windowHeight = function() {
        return nameBoxHeight > 0 ? nameBoxHeight : _Window_NameBox_windowHeight.call(this);
    };

    const _Window_NameBox_updatePlacement = Window_NameBox.prototype.updatePlacement;
    Window_NameBox.prototype.updatePlacement = function() {
        _Window_NameBox_updatePlacement.call(this);
        const mw = this._messageWindow;
        if (mw) {
            if (nameBoxAlign === "center") {
                this.x = mw.x + (mw.width - this.width) / 2;
            } else if (nameBoxAlign === "right") {
                this.x = mw.x + mw.width - this.width;
            }
        }
        this.x += nameBoxOffsetX;
        this.y += nameBoxOffsetY;
    };

    Window_NameBox.prototype.refresh = function() {
        const rect = this.baseTextRect();
        this.contents.clear();
        const textWidth = Math.ceil(this.textSizeEx(this._name).width);
        const x = nameBoxCenterText
            ? Math.max(rect.x, rect.x + Math.floor((rect.width - textWidth) / 2))
            : rect.x;
        const y = Math.max(0, Math.floor((rect.height - this.lineHeight()) / 2));
        this.drawTextEx(this._name, x, y, rect.width);
    };

    //-------------------------------------------------------------------------
    // Janela de escolhas
    //-------------------------------------------------------------------------

    const _Window_ChoiceList_windowWidth = Window_ChoiceList.prototype.windowWidth;
    Window_ChoiceList.prototype.windowWidth = function() {
        const width = _Window_ChoiceList_windowWidth.call(this);
        return Math.max(width, Math.min(choiceMinWidth, Graphics.boxWidth));
    };

    const _Window_ChoiceList_windowHeight = Window_ChoiceList.prototype.windowHeight;
    Window_ChoiceList.prototype.windowHeight = function() {
        let height = _Window_ChoiceList_windowHeight.call(this);
        if (choicePadding >= 0) {
            height += (choicePadding - $gameSystem.windowPadding()) * 2;
        }
        return height;
    };

    const _Window_ChoiceList_updatePadding = Window_ChoiceList.prototype.updatePadding;
    Window_ChoiceList.prototype.updatePadding = function() {
        if (choicePadding >= 0) {
            this.padding = choicePadding;
        } else {
            _Window_ChoiceList_updatePadding.call(this);
        }
    };

    const _Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
    Window_ChoiceList.prototype.updatePlacement = function() {
        _Window_ChoiceList_updatePlacement.call(this);
        if (choicePosition !== "event" || choiceAlignToMessage) {
            let type = $gameMessage.choicePositionType();
            if (choicePosition === "left") {
                type = 0;
            } else if (choicePosition === "center") {
                type = 1;
            } else if (choicePosition === "right") {
                type = 2;
            }
            const mw = this._messageWindow;
            const areaX = choiceAlignToMessage && mw ? mw.x : 0;
            const areaW = choiceAlignToMessage && mw ? mw.width : Graphics.boxWidth;
            switch (type) {
                case 0:
                    this.x = areaX;
                    break;
                case 1:
                    this.x = areaX + (areaW - this.width) / 2;
                    break;
                case 2:
                    this.x = areaX + areaW - this.width;
                    break;
            }
        }
        this.x += choiceOffsetX;
        this.y += choiceOffsetY;
    };
})();
