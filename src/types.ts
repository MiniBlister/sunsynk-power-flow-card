import { LovelaceCard, LovelaceCardConfig } from "custom-card-helpers";

declare global {
    interface HTMLElementTagNameMap {
        'sunsynk-power-flow-card': LovelaceCard;
    }
}

export interface sunsynkPowerFlowCardConfig extends LovelaceCardConfig {
    type: string;
    cardstyle: string;
    panel_mode: boolean;
    large_font: boolean;
    show_solar: boolean;
    card_height: string;
    inverter: {
        modern: boolean;
        colour: string;
        autarky: string;
        model: string;
    }
    battery: {
        energy: number;
        shutdown_soc: number;
        invert_power: boolean;
        colour: string;
        show_daily: boolean;
        animation_speed: number;
        max_power: number;
        full_capacity: number;
        empty_capacity: number;
    }
    solar: {
        colour: string;
        show_daily: boolean;
        mppts: number;
        animation_speed: number;
        max_power: number;
        pv1_name: string;
        pv2_name: string;
        pv3_name: string;
        pv4_name: string;
    }
    load: {
        colour: string;
        show_daily: boolean;
        invert_aux: boolean;
        animation_speed: number;
        max_power: number;
        aux_name: string;
        aux_type: string;
        aux_colour: string;
        aux_off_colour: string;
        additional_loads: number;
        aux_loads: number;
        aux_load1_name: string;
        aux_load2_name: string;
        aux_load1_icon: string;
        aux_load2_icon: string;
        load1_name: string;
        load2_name: string;
        load1_icon: string;
        load2_icon: string;
        show_aux: boolean;
    }
    grid: {
        colour: string;
        no_grid_colour: string;
        show_daily_buy: boolean;
        show_daily_sell: boolean;
        show_nonessential: boolean;
        nonessential_icon: string;
        nonessential_name: string;
        additional_loads: number;
        load1_name: string;
        load2_name: string;
        load1_icon: string;
        load2_icon: string;
        invert_grid: boolean;
        animation_speed: number;
        max_power: number;








    }

}

export interface inverterProg {
    entityID: string;
    show?: boolean;
    charge?: string;
    capacity: number;
}
