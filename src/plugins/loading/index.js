import { h, render } from "vue";
import LoadingVue from "./main/Component.vue";
import './css/index.css';


function createComponent(component, props, parentContainer) {
    const vnode = h(component, props)
    const container = document.createElement('div')
    parentContainer.appendChild(container);
    render(vnode, container);

    return vnode.component
}

function removeElement(el) {
    if (typeof el.remove !== 'undefined') {
        el.remove()
    } else {
        el.parentNode?.removeChild(el)
    }
};


export default LoadingVue;

export function useLoading(globalProps = {}, globalSlots = {}) {
    let instance = null;

    const loading = {
        show(props = globalProps, slots = globalSlots) {
            const forceProps = {
                programmatic: true,
                lockScroll: true,
                isFullPage: false
            };
            const propsData = Object.assign({}, globalProps, props, forceProps);
            let container = propsData.container;

            if (!propsData.container) {
                container = document.body;
                propsData.isFullPage = true;
            }

            instance = createComponent(LoadingVue, propsData, container);
            const mergedSlots = Object.assign({}, globalSlots, slots);
            Object.keys(mergedSlots).map((name) => {
                if (instance != null) {
                    instance.slots[name] = mergedSlots[name]
                }
            });
        },
        hide() {
            if (instance != null) {
                instance.ctx._.setupState.hide();
                let root = instance.vnode.el;
                removeElement(root.parentElement);
            }
        }
    }
    return loading
}
