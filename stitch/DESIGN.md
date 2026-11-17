# Design System: Three Lane Star Collector

**Stitch project:** 16680518690504867811
**Authority:** ProductSpec v2 plus browser-observed DesignInteractionGraph v2.

## Product screens
- Play page - Three Lane Star Collector (TARGET_PLAY_PAGE; source 3859edf29abe48e9a92dfe19560bc93b)

## Physical control slots
- CSLOT_START_ROUND_CONTROL_START: Start round on SURF_HUD
- CSLOT_MOVE_LEFT_CONTROL_LEFT: Move to left lane on SURF_HUD
- CSLOT_MOVE_CENTER_CONTROL_CENTER: Move to center lane on SURF_HUD
- CSLOT_MOVE_RIGHT_CONTROL_RIGHT: Move to right lane on SURF_HUD
- CSLOT_COLLECT_STAR_CONTROL_COLLECT: Collect the star on SURF_HUD
- CSLOT_OPEN_SETTINGS_CONTROL_SETTINGS: Open settings on SURF_HUD
- CSLOT_OPEN_SETTINGS_CONTROL_LEFT: Open settings on SURF_HUD
- CSLOT_OPEN_SETTINGS_CONTROL_COLLECT: Open settings on SURF_HUD
- CSLOT_RESUME_GAME_CONTROL_RESUME: Resume round on SURF_SETTINGS_OVERLAY
- CSLOT_RESUME_GAME_CONTROL_LEFT: Resume round on SURF_HUD
- CSLOT_RESTART_ROUND_CONTROL_RESTART: Restart round on SURF_HUD

## Implementation boundary
These files are accepted visual source, not executable application behavior. Every physical control is owned by its exact data-action and data-control-slot identity. Affected surfaces do not authorize additional controls. Routes, state transitions, persistence, reload behavior, and evidence predicates come from the sealed Product Build Packet, not from labels, inferred layout, or agent prose.

## Source policy
Only the selected response IDs in DESIGN_MANIFEST.json are canonical screens. STITCH_RENDERED_SEMANTICS_V2.json records the locked browser observation, STITCH_TARGET_CANDIDATE_SELECTION.json records exact qualification, and STITCH_RESPONSE_BINDINGS.json joins each target to the downloaded HTML and screenshot hashes. Unselected provider output is evidence only and cannot become implementation authority.
