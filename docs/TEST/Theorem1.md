<div class="proof-container">
<div class="proof-steps">
<div class="proof-step" data-step="1">
START
</div>

<div class="proof-step" data-step="2">
Use Prop 1.2
</div>

<div class="proof-step" data-step="3">
intros U hU
</div>

<div class="proof-step" data-step="4">
intro p
</div>

<div class="proof-step" data-step="5">
obtain ⟨ϵ,hϵ⟩ := hU ($\pi_1$ p) _ ; use ϵ ϵ.1
</div>

<div class="proof-step" data-step="6">
intro x ; Goal => $\pi_1$ x ∈ U := obv
</div>

<div class="proof-step" data-step="7">
Goal => $\pi_1$ x ∈ B ($\pi_1$ p) ϵ := obv [hϵ]
</div>

<div class="proof-step" data-step="8">
x.1 => d x p < ϵ <br>
$\quad \ \ $ => d ($\pi_1$ x) ($\pi_1$ p) + d ($\pi_2$ x) ($\pi_2$ p) < ϵ <br>
$\quad \ \ $ => d ($\pi_1$ x) ($\pi_1$ p) < ϵ <br>
$\quad \ \ $ => $\pi_1$ x ∈ B ($\pi_1$ p) ϵ
</div>

<div class="proof-step" data-step="9">

</div>
</div>

<div class="workspace">
 
</div>
<div class="workspace-contents" style="display: none;">
<div class="workspace-content" data-step="1">
X,Z:Type [metric_space X,Z] <br>
--- <br>
Goal : continuous $\pi_1$
</div>

<div class="workspace-content" data-step="2">
X,Z:Type [metric_space X,Z] <br>
--- <br>
Goal : ∀U:set X, is_open U ⇒ is_open $\pi_1^{-1}$[U]
</div>

<div class="workspace-content" data-step="3">
X,Z:Type [metric_space X,Z] <br>
U : set X, hU : is_open U <br>
--- <br>
Goal : is_open $\pi_1^{-1}$[U]
</div>

<div class="workspace-content" data-step="4">
X,Z:Type [metric_space X,Z] <br>
U : set X, hU : is_open U <br>
p : X × Z [p ∈ $\pi_1^{-1}$[U]] <br>
--- <br>
Goal : ∃r:ℝ [r>0], B p r ⊆ $\pi_1^{-1}$[U]
</div>

<div class="workspace-content" data-step="5">
X,Z:Type [metric_space X,Z] <br>
U : set X, hU : is_open U <br>
p : X × Z [p ∈ $\pi_1^{-1}$[U]] <br>
ϵ : ℝ [ϵ>0], hϵ : B ($\pi_1$ p) ϵ ⊆ U  <br>
--- <br>
Goal : B p ϵ ⊆ $\pi_1^{-1}$[U]
</div>

<div class="workspace-content" data-step="6">
X,Z:Type [metric_space X,Z] <br>
U : set X, hU : is_open U <br>
p : X × Z [p ∈ $\pi_1^{-1}$[U]] <br>
ϵ : ℝ [ϵ>0], hϵ : B ($\pi_1$ p) ϵ ⊆ U <br>
x : X × Z [x ∈ B p ϵ] <br>
--- <br>
Goal : $\pi_1$ x ∈ U
</div>

<div class="workspace-content" data-step="7">
X,Z:Type [metric_space X,Z] <br>
U : set X, hU : is_open U <br>
p : X × Z [p ∈ $\pi_1^{-1}$[U]] <br>
ϵ : ℝ [ϵ>0], hϵ : B ($\pi_1$ p) ϵ ⊆ U <br>
x : X × Z [x ∈ B p ϵ] <br>
--- <br>
Goal : $\pi_1$ x ∈ B ($\pi_1$ p) ϵ
</div>

<div class="workspace-content" data-step="8">
SOLVED
</div>
</div>

<div class="controls">
<button class="prev-step">Previous Step</button>
<button class="next-step">Next Step</button>
</div>
</div>