// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page - Three Lane Star Collector
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageThreeLaneStarCollectorActionId = "start-round-1" | "collect-the-star-2" | "move-to-left-lane-3" | "move-to-center-lane-4" | "move-to-right-lane-5" | "restart-round-6" | "resume-round-7" | "open-settings-8" | "open-settings-9" | "open-settings-10" | "resume-round-11";

export interface PlayPageThreeLaneStarCollectorProps {
  actions?: {
    "start-round-1"?: () => void;
    "collect-the-star-2"?: () => void;
    "move-to-left-lane-3"?: () => void;
    "move-to-center-lane-4"?: () => void;
    "move-to-right-lane-5"?: () => void;
    "restart-round-6"?: () => void;
    "resume-round-7"?: () => void;
    "open-settings-8"?: () => void;
    "open-settings-9"?: () => void;
    "open-settings-10"?: () => void;
    "resume-round-11"?: () => void;
  };

}

export type PlayPageThreeLaneStarCollectorActionCallbacks = NonNullable<PlayPageThreeLaneStarCollectorProps["actions"]>;

export function PlayPageThreeLaneStarCollector({ actions }: PlayPageThreeLaneStarCollectorProps) {
  return (
    <>
      {/* Root surface: SURF_PLAY_PAGE */}
        <div data-surface-id="SURF_PLAY_PAGE" className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex flex-col justify-between" data-setfarm-element-ref="E000001" data-observable-refs="OBS_COLLECT_STAR_OBS_COLLECT_ROUTE OBS_MOVE_CENTER_OBS_CENTER_ROUTE OBS_MOVE_LEFT_OBS_LEFT_ROUTE OBS_MOVE_RIGHT_OBS_RIGHT_ROUTE OBS_OPEN_SETTINGS_OBS_SETTINGS_ROUTE OBS_RESTART_ROUND_OBS_RESTART_ROUTE OBS_RESUME_GAME_OBS_RESUME_ROUTE OBS_START_ROUND_OBS_START_ROUTE">
          
          {/* Background Decor (non-actionable) */}
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
      
          {/* Contained Surface: SURF_HUD */}
          <header data-surface-id="SURF_HUD" className="relative z-10 w-full border-b border-slate-800/80 bg-slate-900/70 backdrop-blur-md px-6 py-4" data-setfarm-element-ref="E000002" data-observable-refs="OBS_COLLECT_STAR_OBS_COLLECT_HIGH_SCORE OBS_COLLECT_STAR_OBS_COLLECT_SCORE_TEXT OBS_COLLECT_STAR_OBS_COLLECT_STATUS_TEXT OBS_MOVE_CENTER_OBS_CENTER_LANE_TEXT OBS_MOVE_LEFT_OBS_LEFT_LANE_TEXT OBS_MOVE_RIGHT_OBS_RIGHT_LANE_TEXT OBS_OPEN_SETTINGS_OBS_SETTINGS_PHASE_TEXT OBS_RESTART_ROUND_OBS_RESTART_HIGH_SCORE_KEPT OBS_RESTART_ROUND_OBS_RESTART_PHASE_TEXT OBS_RESTART_ROUND_OBS_RESTART_SCORE_RESET OBS_RESUME_GAME_OBS_RESUME_LANE_PRESERVED OBS_RESUME_GAME_OBS_RESUME_PHASE_TEXT OBS_RESUME_GAME_OBS_RESUME_SCORE_PRESERVED OBS_START_ROUND_OBS_START_PHASE_TEXT">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Game Title & Status Badges */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
                  <span className="font-bold text-lg tracking-wider text-slate-100 uppercase">Three Lane Star Collector</span>
                </div>
                <div className="h-4 w-px bg-slate-700"></div>
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">Phase: Ready</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-amber-400">High score: 0</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-cyan-400">Score: 0</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-400">Lane 0</span>
                </div>
              </div>
      
              {/* HUD Declared Controls */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Primary action: Start round */}
                <button type="button" data-action="ACT_START_ROUND" data-control-slot="CSLOT_START_ROUND_CONTROL_START" className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow transition-colors flex items-center gap-1.5" data-setfarm-element-ref="E000003" data-observable-refs="OBS_START_ROUND_OBS_START_BUTTON_STATE" data-action-id="start-round-1" onClick={actions?.["start-round-1"]}>
                  Start round
                </button>
      
                {/* Primary action: Collect the star */}
                <button type="button" data-action="ACT_COLLECT_STAR" data-control-slot="CSLOT_COLLECT_STAR_CONTROL_COLLECT" className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs shadow transition-colors" data-setfarm-element-ref="E000004" data-observable-refs="OBS_COLLECT_STAR_OBS_COLLECT_BUTTON_STATE" data-action-id="collect-the-star-2" onClick={actions?.["collect-the-star-2"]}>
                  Collect the star
                </button>
      
                {/* Secondary action: Move left */}
                <button type="button" data-action="ACT_MOVE_LEFT" data-control-slot="CSLOT_MOVE_LEFT_CONTROL_LEFT" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-xs transition-colors" data-setfarm-element-ref="E000005" data-action-id="move-to-left-lane-3" onClick={actions?.["move-to-left-lane-3"]}>
                  Move to left lane
                </button>
      
                {/* Secondary action: Move center */}
                <button type="button" data-action="ACT_MOVE_CENTER" data-control-slot="CSLOT_MOVE_CENTER_CONTROL_CENTER" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-xs transition-colors" data-setfarm-element-ref="E000006" data-action-id="move-to-center-lane-4" onClick={actions?.["move-to-center-lane-4"]}>
                  Move to center lane
                </button>
      
                {/* Secondary action: Move right */}
                <button type="button" data-action="ACT_MOVE_RIGHT" data-control-slot="CSLOT_MOVE_RIGHT_CONTROL_RIGHT" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-xs transition-colors" data-setfarm-element-ref="E000007" data-action-id="move-to-right-lane-5" onClick={actions?.["move-to-right-lane-5"]}>
                  Move to right lane
                </button>
      
                {/* Secondary action: Restart round */}
                <button type="button" data-action="ACT_RESTART_ROUND" data-control-slot="CSLOT_RESTART_ROUND_CONTROL_RESTART" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-xs transition-colors" data-setfarm-element-ref="E000008" data-observable-refs="OBS_RESTART_ROUND_OBS_RESTART_BUTTON_ALWAYS" data-action-id="restart-round-6" onClick={actions?.["restart-round-6"]}>
                  Restart round
                </button>
      
                {/* Secondary action: Resume round (CSLOT_RESUME_GAME_CONTROL_LEFT) */}
                <button type="button" data-action="ACT_RESUME_GAME" data-control-slot="CSLOT_RESUME_GAME_CONTROL_LEFT" className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 border border-emerald-600 text-white font-medium text-xs transition-colors" data-setfarm-element-ref="E000009" data-observable-refs="OBS_RESUME_GAME_OBS_RESUME_LANE_ENABLED" data-action-id="resume-round-7" onClick={actions?.["resume-round-7"]}>
                  Resume round
                </button>
      
                {/* Primary button: Open settings (CSLOT_OPEN_SETTINGS_CONTROL_COLLECT) */}
                <button type="button" data-action="ACT_OPEN_SETTINGS" data-control-slot="CSLOT_OPEN_SETTINGS_CONTROL_COLLECT" className="px-3 py-1.5 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white font-medium text-xs transition-colors" data-setfarm-element-ref="E000010" data-observable-refs="OBS_OPEN_SETTINGS_OBS_SETTINGS_COLLECT_DISABLED" data-action-id="open-settings-8" onClick={actions?.["open-settings-8"]}>
                  Open settings
                </button>
      
                {/* Secondary button: Open settings (CSLOT_OPEN_SETTINGS_CONTROL_LEFT) */}
                <button type="button" data-action="ACT_OPEN_SETTINGS" data-control-slot="CSLOT_OPEN_SETTINGS_CONTROL_LEFT" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-medium text-xs transition-colors" data-setfarm-element-ref="E000011" data-observable-refs="OBS_OPEN_SETTINGS_OBS_SETTINGS_LANE_DISABLED" data-action-id="open-settings-9" onClick={actions?.["open-settings-9"]}>
                  Open settings
                </button>
      
                {/* Secondary button: Open settings (CSLOT_OPEN_SETTINGS_CONTROL_SETTINGS) */}
                <button type="button" data-action="ACT_OPEN_SETTINGS" data-control-slot="CSLOT_OPEN_SETTINGS_CONTROL_SETTINGS" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-medium text-xs transition-colors" data-setfarm-element-ref="E000012" data-action-id="open-settings-10" onClick={actions?.["open-settings-10"]}>
                  Open settings
                </button>
              </div>
            </div>
          </header>
      
          {/* Contained Surface: SURF_GAME_SCENE */}
          <main data-surface-id="SURF_GAME_SCENE" className="relative z-0 flex-1 flex flex-col items-center justify-center p-6 w-full max-w-5xl mx-auto" data-setfarm-element-ref="E000013" data-observable-refs="OBS_OPEN_SETTINGS_OBS_SETTINGS_SCENE_MOUNTED">
            <div className="w-full h-[460px] bg-slate-900/50 rounded-2xl border border-slate-800/80 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              {/* Lane Track Headers */}
              <div className="grid grid-cols-3 gap-4 text-center border-b border-slate-800 pb-3">
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Lane 0 (Left)</div>
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Lane 1 (Center)</div>
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Lane 2 (Right)</div>
              </div>
      
              {/* Three Vertical Lanes Representation */}
              <div className="grid grid-cols-3 gap-4 flex-1 my-4 relative">
                {/* Lane 0 Track */}
                <div className="h-full border border-dashed border-slate-800 rounded-xl bg-slate-950/40 flex flex-col justify-end p-4 items-center">
                  {/* Player ship positioned at Lane 0 initially */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600 border border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.6)] flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                      </svg>
                    </div>
                    <span className="text-[11px] font-mono text-indigo-300 mt-2">Player Ship</span>
                  </div>
                </div>
      
                {/* Lane 1 Track */}
                <div className="h-full border border-dashed border-slate-800 rounded-xl bg-slate-950/40 flex flex-col justify-center p-4 items-center">
                  {/* Star collectible in Lane 1 with accessible role="img" and name="Star" */}
                  <div className="flex flex-col items-center">
                    <svg className="w-14 h-14 text-amber-400 animate-pulse drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" fill="currentColor" viewBox="0 0 20 20" data-setfarm-element-ref="E000014" role="img" aria-label="Star" data-observable-refs="OBS_COLLECT_STAR_OBS_COLLECT_STAR_HIDDEN OBS_RESTART_ROUND_OBS_RESTART_STAR_VISIBLE">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-[11px] font-mono text-amber-300 mt-1">Collectible Star</span>
                  </div>
                </div>
      
                {/* Lane 2 Track */}
                <div className="h-full border border-dashed border-slate-800 rounded-xl bg-slate-950/40 flex flex-col justify-end p-4 items-center">
                  <span className="text-xs text-slate-600 font-mono">Empty Track</span>
                </div>
              </div>
      
              <div className="text-center text-xs text-slate-500 font-mono">
                Route: /play | Use HUD controls to shift lanes, pause, collect stars, or restart.
              </div>
            </div>
          </main>
      
          {/* Contained Surface: SURF_SETTINGS_OVERLAY */}
          {/* Kept visible and pointer-operable in this initial static design snapshot as required */}
          <div data-surface-id="SURF_SETTINGS_OVERLAY" className="relative z-20 w-full max-w-xl mx-auto mb-6 px-6" data-setfarm-element-ref="E000015" data-observable-refs="OBS_OPEN_SETTINGS_OBS_SETTINGS_OVERLAY_VISIBLE OBS_RESUME_GAME_OBS_RESUME_OVERLAY_HIDDEN">
            <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  <h2 className="text-sm font-bold tracking-wide uppercase text-slate-200">Settings Overlay</h2>
                </div>
                <span className="text-xs text-slate-400 font-mono">Status: Paused</span>
              </div>
              
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Configure round parameters or return to the active game field. Game clock and collectible interactions suspend while configuration is engaged.
              </p>
      
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                {/* Primary button in Settings Overlay: Resume round */}
                <button type="button" data-action="ACT_RESUME_GAME" data-control-slot="CSLOT_RESUME_GAME_CONTROL_RESUME" className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg transition-colors flex items-center gap-1.5" data-setfarm-element-ref="E000016" data-action-id="resume-round-11" onClick={actions?.["resume-round-11"]}>
                  Resume round
                </button>
              </div>
            </div>
          </div>
      
        </div>
    </>
  );
}
