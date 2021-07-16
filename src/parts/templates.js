export default {
    /**
     *
     * @param {DOM Object} input     Original input DOm element
     * @param {Object}     settings  Tagify instance settings Object
     */
    wrapper(input, _s){
        return `<tags class="${_s.classNames.namespace} ${_s.mode ? `${_s.classNames[_s.mode + "Mode"]}` : ""} ${input.className}"
                    ${_s.readonly ? 'readonly' : ''}
                    ${_s.disabled ? 'disabled' : ''}
                    ${_s.required ? 'required' : ''}
                    tabIndex="-1">
            <span ${!_s.readonly || _s.mode != 'mix' ? 'contenteditable' : ''} data-placeholder="${_s.placeholder || '&#8203;'}" aria-placeholder="${_s.placeholder || ''}"
                class="${_s.classNames.input}"
                data-tagify-control='input'
                role="textbox"
                aria-autocomplete="both"
                aria-multiline="${_s.mode=='mix'?true:false}"></span>
        </tags>`
    },

    tag(tagData, tagify){
        return `<tag title="${(tagData.title || tagData.value)}"
                    contenteditable='false'
                    spellcheck='false'
                    tabIndex="${this.settings.a11y.focusableTags ? 0 : -1}"
                    class="${this.settings.classNames.tag} ${tagData.class ? tagData.class : ""}"
                    data-tagify-control='tag'
                    ${this.getAttributes(tagData)}>
            <x title='' class="${this.settings.classNames.tagX}" data-tagify-control='tagRemoveBtn' role='button' aria-label='remove tag'></x>
            <div>
                <span class="${this.settings.classNames.tagText}" data-tagify-control='tagText'>${tagData[this.settings.tagTextProp] || tagData.value}</span>
            </div>
        </tag>`
    },

    dropdown(settings){
        var _sd = settings.dropdown,
            isManual = _sd.position == 'manual',
            className = `${settings.classNames.dropdown}`;

        return `<div class="${isManual ? "" : className} ${_sd.classname}" role="listbox" aria-labelledby="dropdown">
                    <div class="${settings.classNames.dropdownWrapper}" data-tagify-control='dropdownWrapper'></div>
                </div>`
    },

    dropdownItem( item, tagify ){
        return `<div ${this.getAttributes(item)}
                    class='${this.settings.classNames.dropdownItem} ${item.class ? item.class : ""}'
                    data-tagify-control='dropdownItem'
                    tabindex="0"
                    role="option">${item.value}</div>`
    },

    dropdownItemNoMatch: null
}
